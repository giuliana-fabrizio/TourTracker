const pool = require('../bdd/db');
const queries = require('../queries/auth.queries');

const sigin = (email, password, callback) => {
    pool.query(queries.sigin, [email, password], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    })
}

module.exports = {
    sigin: sigin
}
