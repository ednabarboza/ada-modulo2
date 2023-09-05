const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
          title: 'API de TODOS',
          version: '1.0.0',
          description: 'É uma API de gerenciar TODOS'
      },
    },
    apis: ['./server.js'],
    components: {
        examples: {
            TodoItem: {
                value: {
                    id: 1,
                    title: 'Comprar uma bolacha',
                    completed: false
                }
            }
        }
    }
  }

  const specs = swaggerJSDoc(options);

  module.exports = specs