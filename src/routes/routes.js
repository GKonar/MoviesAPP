import {BaseController} from "../controllers/base.controller";
import MoviesListRoutes from "./movies-list.routes";
import MovieRoutes from "./movie.routes";
import SerialsRoutes from "./serials.routes.js";
import UserRoutes from "./user.routes";
import AuthRoutes from "./auth.routes"
import {errors} from 'celebrate';


export default class Routes {

    static init(app) {
        app.route('/')
            .get((req, res) => BaseController.info(req, res));

        MoviesListRoutes.routes(app);
        MovieRoutes.routes(app);
        SerialsRoutes.routes(app);
        UserRoutes.routes(app);
        AuthRoutes.routes(app);


        app.use(errors()); //celebrate errors
    }
}
