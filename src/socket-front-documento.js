import { atualizarTextoEditor } from './documento.js'

const socket = io()

export function selecionarDocumento(nome) {
  socket.emit('selecionar-documento', nome, texto => {
    atualizarTextoEditor(texto)
  })
}

export function emitirTextoEditor(dados) {
  socket.emit('texto-editor', dados)
}

socket.on('texto-editor-clientes', texto => {
  atualizarTextoEditor(texto)
})
