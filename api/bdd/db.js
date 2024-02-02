const Pool = require('pg').Pool;

const user = process.env.DB_USER;
const host = 'localhost';
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;
const port = process.env.DB_PORT;

const pool = new Pool({
    user: user,
    host: host,
    password: password,
    database: database,
    port: port
});

module.exports = pool;
