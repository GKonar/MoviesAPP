import MoviesService from "../services/movies.service";
import {paginationOptions} from "../utils/pagination";

export class MoviesController {

    static getMovies(req, res) {

        let pagination = Object.assign({}, paginationOptions);

        if (parseInt(req.query.page) > 0) {
            pagination.offset = req.query.page * pagination.limit;
        }

        MoviesService.getMovies(pagination.limit, pagination.offset)
            .then((movies) => {
                res.status(200).send(movies);
            })
            .catch((error) => {
                res.status(400).send(error);
            })
    }
}
