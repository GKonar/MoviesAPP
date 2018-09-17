import axios from 'axios';

export default class MoviesServices {
    static getMovies() {
        return axios.get('http://localhost:3000/movies');
    }
}