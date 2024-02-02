const error = require('../common_fields');
const services = require('../services/travel.services');

const getAllTravel = (req, res) => {
    const client_id = req.query.id;
    services.getTravels(client_id, (err, data) => {
        if (err) {
            return res.status(500).send({ error: err.message });
        }
        if (data.length === 0) {
            return res.status(404).send({ error: error.notFound });
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

module.exports = {
    getTravels: getAllTravel,
    getTravel: getOneTravel
}
