import validate from 'express-validator';  // validation module
import {MoviesController} from '../controllers/movies.controller';
import {MoviesList} from "../validators/movies.validator"; // so far not important

export default class MovieListRoutes {

    static routes(app)  {
        app.route('/movies')
            .get(validate(MoviesList), (req, res) => MoviesController.getMovies(req, res));
    }
}