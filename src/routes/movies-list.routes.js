import {MoviesController} from '../controllers/movies.controller';
import {MoviesList} from "../validators/movies.validator";
import {celebrate} from "celebrate";

export default class MovieListRoutes {

    static routes(app) {
        app.route('/movies')
            .get(celebrate(MoviesList), (req, res) => MoviesController.getMovies(req, res));
    }
}