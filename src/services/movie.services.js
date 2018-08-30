import axios from 'axios';
// import uuid from 'uuid';

// const id = uuid.v4();

export default class MovieServices {
    static getMovie(movieId) {
        return axios.get(`http://localhost:3000/movies/${movieId}`)
    }

    static deleteMovie(movieId) {
        return axios.delete(`http://localhost:3000/movies/${movieId}`)
    }
    
    static updateMovie(movieId, data) {
        return axios.put(`http://localhost:3000/movies/${movieId}`, data)
    }

    static addMovie(movieId, data ) {
        return axios.post(`http://localhost:3000/movies/${movieId}`, data)
    }
}

// Z tego co rozumiem to nowe id zostanie wygenerowane za pomocą uuid, zostanie 
// przekazane z movie.controller