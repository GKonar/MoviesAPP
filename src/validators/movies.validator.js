import { Joi } from 'celebrate';
import uuid from 'uuid'

const id = uuid.v4();

export const MoviesList = {
    body: {
        movies: Joi.array().required()
    }
};

export const MovieUpdate = {
    body: {
        title: Joi.string().required(),
        author: Joi.string().required(),
        released: Joi.date().required(),
        posterUrl: Joi.string().required()
    }
};

export const MovieAdd = {
    body: {
        id: Joi.string().required(),
        title: Joi.string().required(),
        author: Joi.string().required(),
        released: Joi.date().required(),
        posterUrl: Joi.string().required()
    }
}

