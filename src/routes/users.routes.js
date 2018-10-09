import {UsersController} from "../controllers/users.controller";

export default class UsersRoutes {
    static routes(app) {
        app.route('/users')
            .post((req, res) => UsersController.addUser(req,res))
    }
}