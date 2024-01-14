import {
  adicionarDocumento,
  atualizarDocumento,
  encontrarDocumento,
  obterDocumentos
} from './controller.js'
import io from './servidor.js'

io.on('connection', socket => {
  socket.on('obter-documentos', async devolverDocumentos => {
    const documentos = await obterDocumentos()

    devolverDocumentos(documentos)
  })

  socket.on('adicionar-documento', async nomeDocumento => {
    const documentoExiste = (await encontrarDocumento(nomeDocumento)) !== null

    if (documentoExiste) {
      socket.emit('documento-existente', nomeDocumento)
    } else {
      const resultado = await adicionarDocumento(nomeDocumento)

      if (resultado.acknowledged) {
        io.emit('adicionar-documento-clientes', nomeDocumento)
      }
    }
  })

  socket.on('selecionar-documento', async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento)

    const documento = await encontrarDocumento(nomeDocumento)

    if (documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on('texto-editor', async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizarDocumento(nomeDocumento, texto)

    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit('texto-editor-clientes', texto)
    }
  })
})
