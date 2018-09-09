import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const MovieSchema = new Schema ({
    title: String,
    author: String,
    released: Date,
    //rate: Number,
    posterUrl: String
});

 export const Movie = mongoose.model('Movie', MovieSchema);