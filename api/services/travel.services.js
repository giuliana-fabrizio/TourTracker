const pool = require('../bdd/db');
const queries = require('../queries/travel.queries');

const getAllTravel = (client_id, callback) => {
    pool.query(queries.getTravels, [client_id], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

const getOneTravel = (travel_id, callback) => {
    pool.query(queries.getTravel, [travel_id], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

module.exports = {
    getTravels: getAllTravel,
    getTravel: getOneTravel
}
