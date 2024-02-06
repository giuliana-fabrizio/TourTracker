const error = require('../common_fields');
const services = require('../services/auth.services');

const sigin = (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    services.sigin(email, password, (err, data) => {
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
    sigin: sigin
}
