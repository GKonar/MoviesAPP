import {Movie} from '../models/movie.model'

export default class MoviesService {
    static getMovies() {
        return new Promise((resolve, reject) => {
            Movie.find({}, (err, movies) => {
                if (err) reject(err);
                resolve(movies);
            })
        });
    }
};