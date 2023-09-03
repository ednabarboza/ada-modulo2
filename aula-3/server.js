// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()
// app.use(bodyParser.json())

// //BANCO DE DADOS

// const todos = []; //lista  ou array

// app.get('/todos', (req, res) => {
//     res.json(todos)
// })

// app.post('/todos', (req, res) => {
//     const newTodo = req.body
//     todos.push(newTodo)
//     res.status(201).json(newTodo)
// })

// app.put('/todos/:id', (req, res) => {
//     const todoId = parseInt(req.params.id);
//     const updatedTodo = req.body;
  
//     const index = todos.findIndex(todo => todo.id === todoId);
//     if (index !== -1) {
//       todos[index] = updatedTodo;
//       res.json(updatedTodo);
//     } else {
//       res.status(404).json({ message: 'O item nao foi encontrado' });
//     }
//   });

// // app.put('/todos/:id', (req, res) => {
// //     const todoId = parseInt(req.params.id)
// //     const updateTodo = req.body

// //     const index = todos.findIndex(todo => todo.id === todoId)
// //     if(index === -1) {
// //         todos[index] = updateTodo;
// //         res.json(updateTodo)
// //     }else{
// //         res.status(404).json({message: 'Item não encontrado'})
// //     }
// // })

// app.listen(3000, () => {
//     console.log('Servidor rodando na porta 3000')
// })

