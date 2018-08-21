import { BaseController } from "../controllers/base.controller";
import MoviesListRoutes from "./movies-list.routes";
import MovieRoutes from "./movie.routes";

export default class Routes {

    static init(app) {
        app.route('/') 
            .get((req, res) => BaseController.info(req, res));
        
        MoviesListRoutes.routes(app);
        MovieRoutes.routes(app);
    }
}
