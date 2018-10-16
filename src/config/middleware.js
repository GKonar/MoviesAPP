import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import {JWTListener} from '../events/listeners/jwt.listener';
import {AuthListener} from '../events/listeners/auth.listener';

export default class Middleware {

    static init(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));


        app.use(express.static('public'));

        if (process.env.NODE_ENV !== 'prod') {
            app.use(morgan('dev'));
        }

        app.use(JWTListener);
        app.use(AuthListener);
    }

}