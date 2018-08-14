// ----- TEST FILE -----

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan());

app.get('/', function(req, res){
    res.send("Hello planet!");
});

app.listen(3000, function(){
    console.log("Server listen on port*:" + port);
});
