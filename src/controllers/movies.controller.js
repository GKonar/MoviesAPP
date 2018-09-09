import MoviesServicies from "../services/movies.services";

export class MoviesController {

    static getMovies(req, res) {
        MoviesServicies.getMovies()
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((response) => {
            res.status(400).send(response.data);
        })
    } 

}
