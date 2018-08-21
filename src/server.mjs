import express from 'express';

import Middleware from './config/middleware';
import Routes from "./routes/routes.mjs";

const app = express();
const port = process.env.PORT || 3001;

Middleware.init(app);
Routes.init(app);

app.listen(3001, function(){
    console.log("Server listen on port*:" + port);
});

