import io from './servidor.js'

io.on('connection', socket => {
  console.log('Conectado ao socket', socket.id)

  socket.on('selecionar-documento', nomeDocumento => {
    socket.join(nomeDocumento)
  })

  socket.on('texto-editor', ({ texto, nomeDocumento }) => {
    socket.to(nomeDocumento).emit('texto-editor-clientes', texto)
  })
})
