import { inserirLinkDocumento, removerLinkDocumento } from './index.js'

const socket = io()

socket.emit('obter-documentos', documentos => {
  documentos.forEach(documento => {
    inserirLinkDocumento(documento.nome)
  })
})

export function emitirAdicionarDocumento(nome) {
  socket.emit('adicionar-documento', nome)
}

socket.on('adicionar-documento-clientes', nome => {
  inserirLinkDocumento(nome)
})

socket.on('documento-existente', nome => {
  alert(`O documento ${nome} já existe.`)
})

socket.on('excluir-documento-clientes', nome => {
  removerLinkDocumento(nome)
})