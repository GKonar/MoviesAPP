import axios from 'axios';

export default class MoviesServicies {
    static getMovies() {
        return axios.get('http://localhost:3000/movies');
    }
}