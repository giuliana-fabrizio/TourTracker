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


module.exports = router;
