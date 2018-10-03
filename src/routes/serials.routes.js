import {SerialsController} from '../controllers/serials.controller';
import {SerialUpdate, SerialCreate} from '../validators/serials.validator';
import {celebrate} from 'celebrate';

export default class SerialsRoutes {

    static routes(app) {
        app.route('/serials/')
            .get((req,res) => SerialsController.getSerials(req, res))
            .post(celebrate(SerialCreate),(req,res) => SerialsController.createSerial(req,res));

        app.route('serials/:id')
            .get((req,res) => SerialsController.getSerial(req,res))
            .put(celebrate(SerialUpdate),(req,res) =>SerialsController.updateSerial(req,res))
            .delete((req,res) => SerialsController.deleteSerial(req,res));
    }
}