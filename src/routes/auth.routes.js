import {AuthController} from "../controllers/auth.controller";

export default class AuthRoutes {
    static routes(app) {
        app.route('/auth')
            .post((req, res) => AuthController.auth(req, res));
    }
}