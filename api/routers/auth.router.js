const express = require('express');
const controller = require('../controllers/auth.controller');

const router = express.Router();

/**
 *  @swagger
 *  /auth/login:
 *    get:
 *      tags:
 *        - AUTH
 *      description: To log in
 *      parameters:
 *        - in: query
 *          name: email
 *          type: string
 *          description: Email for log in.
 *        - in: query
 *          name: password
 *          type: string
 *          description: Password for log in.
 *      responses:
 *        '200':
 *          description: Authentication successful
 *        '404':
 *          description: Not found
 *        '500':
 *          description: Internal server error
 */
router.get('/login', controller.signin);

/**
 *  @swagger
 *  /auth/signup:
 *    post:
 *      tags:
 *        - CLIENT
 *      description: Signup
 *      parameters:
 *        - in: body
 *          name: client
 *          description: The new client properties.
 *          schema:
 *            type: object
 *            required:
 *              - firstname
 *              - name
 *              - email
 *              - gender
 *              - city_id
 *              - password
 *            properties:
 *              firstname:
 *                type: string
 *              name:
 *                type: string
 *              email:
 *                type: string
 *              gender:
 *                type: string
 *              city_id:
 *                type: number
 *              password:
 *                type: string
 *            example:
 *              client:
 *                firstname: "Léo"
 *                name: "Hugonnot"
 *                email: "leo.hugonnot@edu.univ-fcomte.fr"
 *                gender: "Masculin"
 *                city_id: 35006
 *                password: "123456789"
 *      responses:
 *        '200':
 *          description: Place created succeffuly
 *        '500':
 *          description: Internal server error
 */
router.post('/signup', controller.signup);

module.exports = router;
