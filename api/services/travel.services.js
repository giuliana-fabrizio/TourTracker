const pool = require('../bdd/db');
const queries = require('../queries/travel.queries');

/**
 * Retrieves all travels associated with a user.
 * 
 * @param {number} client_id - The ID of the user.
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const getAllTravel = (client_id, callback) => {
    pool.query(queries.getTravels, [client_id], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

/**
 * Retrieves details of a specific travel.
 * 
 * @param {number} travel_id - The ID of the travel.
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const getOneTravel = (travel_id, callback) => {
    pool.query(queries.getTravel, [travel_id], (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

/**
 * Create a new travel.
 * 
 * @param {JSON} travel - The attributes of the new travel.
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const addTravel = (travel, callback) => {
    pool.query(queries.createTravel, [
        travel.start_date,
        travel.end_date,
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

/**
 * Update a travel.
 * 
 * @param {JSON} travel - The travel to update.
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const updateTravel = (travel, callback) => {
    pool.query(queries.updateTravel, [
        travel.start_date,
        travel.end_date,
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

/**
 * Delete a travel.
 * 
 * @param {number} travel_id - The travel ID to delete.
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const deleteTravel = (travel_id, callback) => {
    pool.query(queries.removeActivities, [travel_id], (err, res) => {
        if (err) {
            return callback(err);
        }
        pool.query(queries.removeTravel, [travel_id], (err, res) => {
            if (err) {
                return callback(err);
            }
            return callback(null, res.rows);
        });
    });
}

/**
 * Retrieves all travels associated with a user.
 * 
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const getAllDepartments = (callback) => {
    pool.query(queries.getDepartments, (err, res) => {
        if (err) {
            return callback(err);
        }
        return callback(null, res.rows);
    });
}

/**
 * Retrieves all travels associated with a user.
 * 
 * @param {function(error: Error, result: any)} callback - The callback function.
 * @return {Promise} - A Promise object.
 */
const getAllRegions = (callback) => {
    pool.query(queries.getRegions, (err, res) => {
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
    removeTravel: deleteTravel,
    getDepartments: getAllDepartments,
    getRegions: getAllRegions
}
