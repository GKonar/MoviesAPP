import axios from 'axios';

export default class MovieServices {
    static getMovie(movieId) {
        return axios.get(`http://localhost:3000/movies/${movieId}`)
    }

    static deleteMovie(movieId) {
        return axios.delete(`http://localhost:3000/movies/${movieId}`)
    }
    
    static updateMovie(movieId) {
        return axios.put(`http://localhost:3000/movies/${movieId}`)
    }

}

