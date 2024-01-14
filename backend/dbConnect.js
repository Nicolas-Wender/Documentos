import { MongoClient, ServerApiVersion } from 'mongodb'
import { config } from 'dotenv'

config({ path: './.env', encoding: 'latin1' })

const uri = process.env.MONGODB_URL

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

let documentosColecao

try {
  await client.connect()

  await client.db('WebSockets').command({ ping: 1 })

  documentosColecao = client.db('WebSockets').collection('Documentos')

  console.log('Conectado ao banco de dados com sucesso!')
} catch (erro) {
  console.log(erro)
}

export { documentosColecao }
