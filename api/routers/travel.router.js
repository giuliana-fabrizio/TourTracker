const express = require('express');
const controller = require('../controllers/travel.controller');

const router = express.Router();

/**
 *  @swagger
 * /travel:
 *   get:
 *      description: Get all travels of a user
 *      tags:
 *          - TRAVEL
 *      parameters:
 *          - in: query
 *            name: id
 *            type: number
 *            required: true
 *            description: Id of the user
 *      responses:
 *          '200':
 *              description: Results gotten successfully
 *          '404':
 *              description: Not found
 *          '500':
 *              description: Internal server error
 */
router.get('/', controller.getTravels);

/**
 *  @swagger
 * /travel/details:
 *   get:
 *      description: Get details about a travel
 *      tags:
 *          - TRAVEL
 *      parameters:
 *          - in: query
 *            name: id
 *            type: number
 *            required: true
 *            description: Id of the travel
 *      responses:
 *          '200':
 *              description: Results gotten successfully
 *          '404':
 *              description: Not found
 *          '500':
 *              description: Internal server error
 */
router.get('/details/', controller.getTravel);

/**
 *  @swagger
 *  /travel/add:
 *    post:
 *      tags:
 *        - TRAVEL
 *      description: Add a travel
 *      parameters:
 *        - in: body
 *          name: travel
 *          description: The new travel properties.
 *          schema:
 *            type: object
 *            required:
 *              - lifetime
 *              - comment
 *              - score
 *              - client_id
 *              - city_id
 *            properties:
 *              lifetime:
 *                type: number
 *              comment:
 *                type: string
 *              score:
 *                type: number
 *              client_id:
 *                type: number
 *              city_id:
 *                type: number
 *            example:
 *              travel:
 *                lifetime: 15
 *                comment: "Ville au top, rien à redire, tout est parfait !"
 *                score: 5
 *                client_id: 1
 *                city_id: 4420
 *      responses:
 *        '200':
 *          description: Place created succeffuly
 *        '500':
 *          description: Internal server error
 */
router.post('/add/', controller.createTravel);

/**
 *  @swagger
 *  /travel/put:
 *    put:
 *      tags:
 *        - TRAVEL
 *      description: Update a travel
 *      parameters:
 *        - in: body
 *          name: travel
 *          description: The new travel properties.
 *          schema:
 *            type: object
 *            required:
 *              - lifetime
 *              - comment
 *              - score
 *              - client_id
 *              - city_id
 *              - id
 *            properties:
 *              lifetime:
 *                type: number
 *              comment:
 *                type: string
 *              score:
 *                type: number
 *              client_id:
 *                type: number
 *              city_id:
 *                type: number
 *              id:
 *                type: number
 *            example:
 *              travel:
 *                lifetime: 15
 *                comment: "Tout est parfait !"
 *                score: 5
 *                client_id: 1
 *                city_id: 4420
 *                id: 3
 *      responses:
 *        '200':
 *          description: Place created succeffuly
 *        '500':
 *          description: Internal server error
 */
router.put('/put/', controller.updateTravel);

/**
 *  @swagger
 * /travel/drop:
 *   delete:
 *      description: Delete a travel
 *      tags:
 *          - TRAVEL
 *      parameters:
 *          - in: query
 *            name: id
 *            type: number
 *            required: true
 *            description: Id of the travel
 *      responses:
 *          '200':
 *              description: Results gotten successfully
 *          '500':
 *              description: Internal server error
 */
router.delete('/drop/', controller.removeTravel);

/**
 *  @swagger
 * /travel/departments:
 *   get:
 *      description: Get all departments
 *      tags:
 *          - TRAVEL
 *      responses:
 *          '200':
 *              description: Results gotten successfully
 *          '500':
 *              description: Internal server error
 */
router.get('/departments', controller.getDepartments);

/**
 *  @swagger
 * /travel/regions:
 *   get:
 *      description: Get all regions
 *      tags:
 *          - TRAVEL
 *      responses:
 *          '200':
 *              description: Results gotten successfully
 *          '500':
 *              description: Internal server error
 */
router.get('/regions', controller.getRegions);


module.exports = router;
