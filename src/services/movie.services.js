// import axios from 'axios';
import { Movie } from '../models/movie.model'

export default class MovieServices {
    static getMovie(id) {
        return new Promise((resolve, reject) => {
            Movie.findById(id, (err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    static deleteMovie(id) {
        return new Promise((resolve, reject) => {
            Movie.findByIdAndDelete(id , (err) => {
                if (err) reject(err);
                resolve(true);
            })
        })
    }
    
    static updateMovie(id) {
        return new Promise((resolve, reject) => {
            Movie.findByIdAndUpdate(id, data, { new: true }, (err, data) => {
              if (err) reject(err);
              resolve(data);
            })
        })
    }

    static addMovie() {
        return new Promise((resolve, reject) => {
            let newMovie = new Movie(data);
            newMovie.save((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
         })
    }
}

