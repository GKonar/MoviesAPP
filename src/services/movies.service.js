import {Movie} from '../models/movie.model'

export default class MoviesService {
    static getMovies(limit, offset) {
        return new Promise((resolve, reject) => {
            Movie.find({})
                .skip(offset)
                .limit(limit)                       //Pagination options
                .exec((err, movies) => {
                    if (err) reject(err);
                    resolve(movies);
                })
        });
    }
};

