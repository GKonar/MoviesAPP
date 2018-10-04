import {MovieController} from "../controllers/movie.controller";
import {MovieUpdate, MovieAdd} from "../validators/movies.validator";
import {celebrate} from 'celebrate';

export default class MovieRoutes {

    static routes(app) {
        app.route('/movies/:id')
            .get((req, res) => MovieController.getMovie(req, res))
            .put(celebrate(MovieUpdate), (req, res) => MovieController.updateMovie(req, res))
            .delete((req, res) => MovieController.deleteMovie(req, res));

        app.route('/movies/')
            .post(celebrate(MovieAdd), (req, res) => MovieController.addMovie(req, res));
    }
}