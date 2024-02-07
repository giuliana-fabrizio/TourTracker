const pool = require('../bdd/db');
const queries = require('../queries/auth.queries');

const signin = (email, password, callback) => {
    pool.query(auth_queries.signin, [email, password], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    })
}

module.exports = {
    signin: signin,
}
