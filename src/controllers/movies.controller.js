import MoviesService from "../services/movies.service";

export class MoviesController {

    static getMovies(req, res) {
        MoviesService.getMovies()
            .then((movies) => {
                res.status(200).send(movies);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }
}
