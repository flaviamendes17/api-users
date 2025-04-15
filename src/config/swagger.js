const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 
 // Configurações do Swagger
const options = {
    definition: {
    openapi: '3.0.0',
    info: {
    title: 'API dos usuário e posts',
    version: '1.0.0',
    description: 'Documentação da API para gerenciar usuário e posts',
    },
    },
   apis: ['./src/routes/*.js'], // Caminho onde estão as rotas
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = function (app) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};