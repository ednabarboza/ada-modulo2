const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const todos = []

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.post('/todos', (req, res) => {
    const newTodo = req.body
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

app.put('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id) //pegar o id inserido no parametro
    const updatedTodo = req.body 

    const index = todos.findIndex(todo => todo.id === todoId)

    if(index !== -1){
        todos[index] = updatedTodo
        res.json(updatedTodo);
    }else{
        res.status(404).json({message: 'O item não foi encontrado'})
    }
})

app.delete('/todos/:id', (req, res) => {
    const todoId = parseInt(req.params.id)

    const index = todos.findIndex(todo => todo.id === todoId)

    if(index !== -1){
        const revoverTodo = todos.splice(index, 1)
        res.json(revoverTodo[0])
    }else{
        res.status(404).json({message: 'item não encontrado'})
    }
})



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/todos`);
})