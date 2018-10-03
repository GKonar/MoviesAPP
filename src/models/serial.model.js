import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const SerialSchema = new Schema({
    title: String,
    author: String,
    seasons: Number,
    episodes: Number,
    releaseDate: Date
});

export const Serial = mongoose.model('Serial', SerialSchema);