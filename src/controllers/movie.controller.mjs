import MovieServicies from '../services/movie.services';

export class MovieController {

    static getMovie(req, res) {
        MovieServicies.getMovie()
        .then((response) => {
            res.status(200).send(req.params.id)
        })
        .catch((response) => {
            res.status(400).send(req.params.id) 
        })
    }
}

