import {UserController} from "../controllers/user.controller";
import {AddUser} from "../validators/users.validator";
import {celebrate} from 'celebrate';

export default class UserRoutes {
    static routes(app) {
        app.route('/users/')
            .post(celebrate(AddUser), (req, res) => UserController.addUser(req, res));
        app.route('/users/:username')
            .get((req, res) => UserController.getUserByUsername(req,res));
    }
}