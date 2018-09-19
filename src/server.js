import express from 'express';
import  {}  from 'dotenv/config';

import Middleware from './config/middleware';
import Routes from "./routes/routes.js";
import Database from './config/database';

const app = express();
const port = process.env.PORT;

Database.init();
Middleware.init(app);
Routes.init(app);

app.listen(3001, () => {
    console.log("Server listen on port*:" + port);
});
