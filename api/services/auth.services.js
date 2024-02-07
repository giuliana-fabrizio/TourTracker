const pool = require('../bdd/db');
const { alreadyPresent } = require('../common_fields');
const auth_queries = require('../queries/auth.queries');
const client_queries = require('../queries/client.queries');

const signin = (email, password, callback) => {
    pool.query(auth_queries.signin, [email, password], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    })
}

const signup = (client, callback) => {
    pool.query(client_queries.getuser, [client.email], (err, res) => {
        if (err) {
            return callback(err);
        } else if (res.rowCount === 0) {
            pool.query(client_queries.signup, [
                client.firstname,
                client.name,
                client.email,
                client.gender,
                client.city_id,
                client.password
            ], (err, res) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, res.rows);
            });
        } else {
            return callback({ message: alreadyPresent });
        }
    });
}

module.exports = {
    signin: signin,
    signup: signup
}
