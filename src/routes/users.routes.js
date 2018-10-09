import {UsersController} from "../controllers/users.controller";
import AuthServices from "../services/auth.services";

export default class UsersRoutes {
    static routes(app) {
        app.route('/users')
            .post((req, res) => UsersController.addUser(req, res));
        app.route('/authenticate')
            .post((req, res) => AuthServices.authUser(req, res));
    }
}