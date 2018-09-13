import { Joi } from 'celebrate';

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
        title: Joi.string().required(),
        author: Joi.string().required(),
        released: Joi.date().required(),
        posterUrl: Joi.string().required()
    }
}

