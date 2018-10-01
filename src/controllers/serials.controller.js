export class SerialController {

    static getSerials(req, res) {       // get all list of series
        SerialServices.getSerials()     // Add pagination later
            .then((serials) => {
                res.status(200).send(serials);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

    static getSerial(req, res) {
        SerialServices.getSerial(req.params.id)
        .then((serial) => {
            res.status(200).send(serial);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }

    static deleteSerial(req, res) {
        SerialServices.deleteSerial(req.params.id)
        .then((serial) => {
            res.status(200).send(serial);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }

    static updateSerial(req, res) {
        SerialServices.updateSerial(req.params.id, req.body)
        .then((serial) => {
            res.status(200).send(serial);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }

    static createSerial(req, res) {
        SerialServices.addSerial(req.body)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((error) => {
            res.status(400).send(error);
        })
    }
}