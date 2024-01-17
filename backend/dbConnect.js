import { config } from 'dotenv'
import { MongoClient } from 'mongodb'

config({ path: './.env', encoding: 'latin1' })

const uri = process.env.MONGODB_URL

const cliente = new MongoClient(uri)

let documentosColecao

try {
  await cliente.connect()

  const db = cliente.db('WebSockets')
  documentosColecao = db.collection('Documentos')

  console.log('Conectado ao banco de dados com sucesso!')
} catch (erro) {
  console.log(erro)
}

export { documentosColecao }
