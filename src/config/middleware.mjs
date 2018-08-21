import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

export default class Middleware {

    static init(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));

        app.use(express.static('public'));

        if(process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
            app.use(morgan('dev'));
        }
    }

}