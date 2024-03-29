import express from 'express'
import url from 'url'
import path from 'path'
import http from 'http'
import { Server } from 'socket.io'
import { config } from 'dotenv'

config({ path: './.env', encoding: 'latin1'})

const app = express()
const porta = process.env.PORTA || 3000

const caminhoAtual = url.fileURLToPath(import.meta.url)
const diretorioPublico = path.join(caminhoAtual, '../..', 'src')

app.use(express.static(diretorioPublico))

const servidorHttp = http.createServer(app)

servidorHttp.listen(porta, () =>
  console.log(`Servidor rodando em  http://localhost:${porta}`)
)

const io = new Server(servidorHttp)

export default io
