import io from './servidor.js'

const documentos = [
  {
    nome: 'Exemplo1',
    texto: 'texto de Exemplo1...'
  },
  {
    nome: 'Exemplo2',
    texto: 'texto de Exemplo2...'
  },
  {
    nome: 'Exemplo3',
    texto: 'texto de Exemplo3...'
  }
]

io.on('connection', socket => {
  console.log('Conectado ao socket', socket.id)

  socket.on('selecionar-documento', (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento)

    const documento = encontrarDocumento(nomeDocumento)

    if (documento) {
      devolverTexto(documento.texto)
    }
  })

  socket.on('texto-editor', ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento)

    if (documento) {
      documento.texto = texto
      socket.to(nomeDocumento).emit('texto-editor-clientes', texto)
    }
  })
})

function encontrarDocumento(nome) {
  const documento = documentos.find(documento => {
    return documento.nome === nome
  })

  return documento
}
