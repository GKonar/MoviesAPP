import MovieService from "../services/movies.service";

export class MoviesController {

    static getMovies(req, res) {
        MovieService.getMovies()
            .then((movies) => {
                res.status(200).send(movies);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }

}
