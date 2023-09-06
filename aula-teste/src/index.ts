import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())
app.use(routes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})
