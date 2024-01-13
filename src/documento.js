import {
  emitirTextoEditor,
  selecionarDocumento
} from './socket-front-documento.js'

const parametros = new URLSearchParams(window.location.search)
const nomeDocumento = parametros.get('nome')

const textoEditor = document.querySelector('#editor')
const tituloDocumento = document.querySelector('#titulo-documento')

tituloDocumento.textContent = nomeDocumento || 'Novo Documento'

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor({ texto: textoEditor.value, nomeDocumento })
})

export function atualizarTextoEditor(texto) {
  textoEditor.value = texto
}
