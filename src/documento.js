const socket = io()

const textoEditor = document.querySelector('#editor')

textoEditor.addEventListener('keyup', () => {
  socket.emit('texto-editor', textoEditor.value)
})

socket.on('texto-editor-clientes', texto => {
  textoEditor.value = texto
})
