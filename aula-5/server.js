require('dotenv').config();

const express = require('express')
const BodyParser = require('body-parser')
import bodyParser from 'body-parser';
import OlaMundo from './teste.js'
import SwaggerUI from 'swagger-ui-express';


const { PORT} = process.env;

const app = express()

app.use(BodyParser.json())

const todos = []

//Doc da nossa API

app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))

app.get('/todos', (req, res) => {
    res.json(todos)
})

app.listen(PORT, () => {
    console.log('aplicação em: http://localhost:3000')
})

OlaMundo.falar('Olá, mundo')

//console.log('Olá mundo 123')