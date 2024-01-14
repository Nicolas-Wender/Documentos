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
