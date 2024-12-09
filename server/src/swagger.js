const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MediConnect API',
            version: '1.0.0'
        }
    },
    apis: ['src/routes/*.js']
};

const specs = swaggerJsdoc(options);
const swaggerDocs = (app, port) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = { swaggerDocs }