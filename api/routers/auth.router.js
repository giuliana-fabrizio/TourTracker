const express = require('express');
const controller = require('../controllers/auth.controller');

const router = express.Router();

/**
 *  @swagger
 *  /auth/signin:
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
router.get('/signin', controller.signin);

router.post('/signup', () => {
    console.log("TODO")
});

module.exports = router;
