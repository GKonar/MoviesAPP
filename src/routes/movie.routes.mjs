import { MovieController } from "../controllers/movie.controller";

export default class MovieRoutes {

    static routes(app) {
        app.route('/movies/:id')
            .get((req, res) => MovieController.getMovie(req, res));
        
        app.route('/movies/:id')
            .delete((req, res) => MovieController.deleteMovie(req, res));
        
        app.route('/movies/:id')
            .put((req, res) => MovieController.updateMovie(req, res));

    }
}