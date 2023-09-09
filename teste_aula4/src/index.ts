import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express()

app.use(cors())
app.use(routes)

const PORT = 8080;
const todos = []

app.listen(PORT, () => {
    console.log(`Rodando em http://localhost/${PORT}`)
})


