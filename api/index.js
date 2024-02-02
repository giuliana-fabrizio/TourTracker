// utilisation des variables d'environnement
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const routerTravel = require('./routers/travel.router');

const server = express();

// utilisation des requetes CORS
server.use(cors());

// lancement du serveur
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('assets'));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/**
 * Import and define swagger doc
 */
/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "API TourTracker",
            description: "API documentation",
            servers: [`http://localhost:${process.env.PORT_SERVER}/`],
        },
    }),
    apis: ["index.js", "./routers/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);
server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// redirection
server.use('/travel', routerTravel);

server.listen(process.env.PORT_SERVER, () => {
    console.log(`Server is listening port ${process.env.PORT_SERVER}`);
});
