import MovieServices from '../services/movie.services';

export class MovieController {

    static getMovie(req, res) {
        MovieServices.getMovie(id)
        .then((movie) => {
            res.status(200).send(movie)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
    }

    static deleteMovie(req, res) {
        MovieServices.deleteMovie(id)
        .then((movie) => {
            res.status(200).send(movie)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
    }

    static updateMovie(req, res) {
        MovieServices.updateMovie(id, data)
        .then((movie) => {
            res.status(200).send(movie)
        }) 
        .catch((error) => {
            res.status(400).send(error)
        })
    }

    static addMovie(req, res) {
        MovieServices.addMovie(data)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch((error) => {
            res.status(400).send(error)
        })
    }
}

