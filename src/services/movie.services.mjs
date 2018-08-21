import axios from 'axios';

export default class MovieServicies {
    static getMovie() {
        return axios.get('http://localhost:3000/movies/:id')
    }
}