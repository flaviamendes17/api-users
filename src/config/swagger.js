const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'API Users e posts',
    version: '1.0.0',
    description: 'Documentação da API de usuários e posts',
    },
    servers: [
        {
        url: 'http://localhost:3000/api',
        description: 'Servidor local',
        },
      ],
    },
    apis: ['./src/routes/*.js'], 
  };

const swaggerSpec = swaggerJsdoc(options);

function setupSwaggerUI(app) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwaggerUI;