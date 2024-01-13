import express from 'express'
import url from 'url'
import path from 'path'
import http from 'http'

const app = express()
const porta = process.env.porta || 3000

const caminhoAtual = url.fileURLToPath(import.meta.url)
const diretorioPublico = path.join(caminhoAtual, '../..', 'src')
app.use(express.static(diretorioPublico))

app.listen(porta, () => console.log(`Servidor rodando em  http://localhost:${porta}`))
