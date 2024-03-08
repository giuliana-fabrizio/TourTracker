const error = require('../common_fields');
const services = require('../services/travel.services');

const getAllTravel = (req, res) => {
    const client_id = req.query.id;
    services.getTravels(client_id, (err, data) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        return res.status(200).send({ data: data });
    });
}

const getOneTravel = (req, res) => {
    const travel_id = req.query.id;
    services.getTravel(travel_id, (err, data) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        if (data.length === 0) {
            return res.status(404).send({ error: error.notFound });
        }
        return res.status(200).send({ data: data });
    });
}

const addTravel = (req, res) => {
    const travel = req.body.travel;
    services.createTravel(travel, (err, data) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        return res.status(201).send({ data: data });
    });
}

const updateTravel = (req, res) => {
    const travel = req.body.travel;
    services.updateTravel(travel, (err, data) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        return res.status(201).send({ data: data });
    });
}

const deleteTravel = (req, res) => {
    const travel_id = req.query.id;
    services.removeTravel(travel_id, (err, data) => {
        if (err) {
            return res.status(400).send({ error: err.message });
        }
        return res.status(201).send({ data: data });
    });
}

const getAllDepartments = (_, res) => {
    services.getDepartments((err, data) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        return res.status(200).send({ data: data });
    });
}

const getAllRegions = (_, res) => {
    services.getRegions((err, data) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        return res.status(200).send({ data: data });
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
