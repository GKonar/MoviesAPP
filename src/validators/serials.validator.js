import {Joi} from 'celebrate';

export const SerialUpdate = {
    body: {
        title: Joi.string().required(),
        author: Joi.string().required(),
        seasons: Joi.number().required(),
        episodes: Joi.number().required(),
        releaseDate: Joi.date().required()
    }
};

export const SerialCreate = {
    body: {
        title: Joi.string().required(),
        author: Joi.string().required(),
        seasons: Joi.number().required(),
        episodes: Joi.number().required(),
        releaseDate: Joi.date().required()
    }
};


