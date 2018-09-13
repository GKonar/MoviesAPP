import {MoviesController} from '../controllers/movies.controller';

export default class MovieListRoutes {

    static routes(app) {
        app.route('/movies')
            .get((req, res) => MoviesController.getMovies(req, res));
    }
}