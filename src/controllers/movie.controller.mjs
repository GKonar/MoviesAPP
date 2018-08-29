import MovieServices from '../services/movie.services';

export class MovieController {

    static getMovie(req, res) {
        MovieServices.getMovie(req.params.id)
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch((response) => {
            res.status(400).send(response.data) 
        })
    }

    static deleteMovie(req, res) {
        MovieServices.deleteMovie(req.params.id)
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch((response) => {
            res.status(400).send(response.data)
        })
    }

    static updateMovie(req, res) {
        MovieServices.updateMovie(req.params.id, req.body)
        .then((response) => {
            res.status(200).send(response.data)
        }) 
        .catch((response) => {
            res.status(400).send(response.data)
        })
    }

    static addMovie(req, res) {
        MovieServices.addMovie(req.body)
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch((response) => {
            res.status(400).send(response.data)
        })
    }
}

