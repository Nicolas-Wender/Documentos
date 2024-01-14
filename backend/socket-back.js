import { atualizarDocumento, encontrarDocumento } from './controller.js'
import io from './servidor.js'

io.on('connection', socket => {
  console.log('Conectado ao socket', socket.id)

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
