// utilisation des variables d'environnement
const dotenv = require('dotenv');
dotenv.config();

const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv');
const express = require('express');

const server = express();

// utilisation des requetes CORS
server.use(cors());

// lancement du serveur
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static('assets'))

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.listen(process.env.PORT_SERVER, () => {
    console.log(`Server is listening port ${process.env.PORT_SERVER}`);
});
