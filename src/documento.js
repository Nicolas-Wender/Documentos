import {
  emitirExcluirDocumento,
  emitirTextoEditor,
  selecionarDocumento
} from './socket-front-documento.js'

const parametros = new URLSearchParams(window.location.search)
const nomeDocumento = parametros.get('nome')

const textoEditor = document.querySelector('#editor')
const tituloDocumento = document.querySelector('#titulo-documento')
const botaoExcluir = document.querySelector('#excluir-documento')

tituloDocumento.textContent = nomeDocumento || 'Novo Documento'

selecionarDocumento(nomeDocumento)

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor({ texto: textoEditor.value, nomeDocumento })
})

export function atualizarTextoEditor(texto) {
  textoEditor.value = texto
}

botaoExcluir.addEventListener('click', () => {
  emitirExcluirDocumento(nomeDocumento)
})

export function alertarERedirecionar(nome) {
  if (nome === nomeDocumento) {
    window.location.href = 'index.html'
    alert(`O documento ${nome} foi excluído.`)
  }
}
