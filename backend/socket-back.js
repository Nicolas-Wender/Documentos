import io from './servidor.js'

io.on('connection', socket => {
  console.log('Conectado ao socket', socket.id)

  socket.on('texto-editor', texto => {
    socket.broadcast.emit('texto-editor-clientes', texto)
  })
})