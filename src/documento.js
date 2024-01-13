import { emitirTextoEditor } from './socket-front-documento.js'

const textoEditor = document.querySelector('#editor')

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor(textoEditor.value)
})

export function atualizarTextoEditor(texto) {
  textoEditor.value = texto
}
