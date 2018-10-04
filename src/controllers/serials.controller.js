import SerialsService from '../services/serials.service';
import {paginationOptions} from '../utils/pagination';

export class SerialsController {

    static getSerials(req, res) {

        let pagination = Object.assign({}, paginationOptions);

        if(parseInt(req.query.page) > 0) {
            pagination.offset = req.query.page * pagination.limit;
        }

        SerialsService.getSerials(pagination.limit, pagination.offset)
            .then((serials) => {
                res.status(200).send(serials);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

    static getSerial(req, res) {
        SerialsService.getSerial(req.params.id)
            .then((serial) => {
                res.status(200).send(serial);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

    static deleteSerial(req, res) {
        SerialsService.deleteSerial(req.params.id)
            .then((serial) => {
                res.status(200).send(serial);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

    static updateSerial(req, res) {
        SerialsService.updateSerial(req.params.id, req.body)
            .then((serial) => {
                res.status(200).send(serial);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

    static createSerial(req, res) {
        SerialsService.createSerial(req.body)
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }
}

// need imports