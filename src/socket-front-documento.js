import { atualizarTextoEditor } from './documento.js'

const socket = io()

export function emitirTextoEditor(texto) {
  socket.emit('texto-editor', texto)
}

socket.on('texto-editor-clientes', texto => {
  atualizarTextoEditor(texto)
})
