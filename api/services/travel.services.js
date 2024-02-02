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

const addTravel = (travel, callback) => {
    pool.query(queries.createTravel, [
        travel.lifetime,
        travel.comment,
        travel.score,
        travel.client_id,
        travel.city_id
    ], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

const updateTravel = (travel, callback) => {
    pool.query(queries.updateTravel, [
        travel.lifetime,
        travel.comment,
        travel.score,
        travel.client_id,
        travel.city_id,
        travel.id
    ], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

const deleteTravel = (travel_id, callback) => {
    pool.query(queries.removeTravel, [travel_id], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

module.exports = {
    getTravels: getAllTravel,
    getTravel: getOneTravel,
    createTravel: addTravel,
    updateTravel: updateTravel,
    removeTravel: deleteTravel
}