import {Joi} from 'celebrate';

export const AddUser = {
    body: {
        username: Joi.string().required(),
        password: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        user: Joi.object().required()
    }
};