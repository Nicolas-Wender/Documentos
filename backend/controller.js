import { documentosColecao } from './dbConnect.js'

export function encontrarDocumento(nome) {
  const documento = documentosColecao.findOne({
    nome
  })

  return documento
}

export function atualizarDocumento(nome, texto) {
  const atualizacao = documentosColecao.updateOne(
    {
      nome
    },
    {
      $set: {
        texto
      }
    }
  )

  return atualizacao
}

export function obterDocumentos() {
  const documentos = documentosColecao.find().toArray()

  return documentos
}

export function adicionarDocumento(nome) {
  const resultado = documentosColecao.insertOne({
    nome,
    texto: ''
  })

  return resultado
}
