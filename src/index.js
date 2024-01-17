import './socket-front-index.js'
import { emitirAdicionarDocumento } from './socket-front-index.js'

const listaDocumentos = document.getElementById('lista-documentos')
const form = document.getElementById('criar-documento')
const input = document.getElementById('nome-documento')

form.addEventListener('submit', event => {
  event.preventDefault()
  emitirAdicionarDocumento(input.value)
  input.value = ''
})

export function inserirLinkDocumento(nome) {
  listaDocumentos.innerHTML += `
  <tr id="documento-${nome}">
    <td class="px-6 py-4 whitespace-nowrap">
      <a href="documento.html?nome=${nome}">${nome}</a>
    </td>
  </tr>`
}

export function removerLinkDocumento(nome) {
  const documento = document.getElementById(`documento-${nome}`)

  listaDocumentos.removeChild(documento)
}
