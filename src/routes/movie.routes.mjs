import { MovieController } from "../controllers/movie.controller";

export default class MovieRoutes {

    static routes(app) {
        app.route('/movies/:id')
            .get((req,res) => MovieController.getMovie(req, res));
    }
}