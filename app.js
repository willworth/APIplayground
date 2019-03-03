const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require('request');
const requestPromise = require('request-promise');
const routes = require('./routes/routes');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(__dirname + '/public'));

app.use('/', require('./routes/routes.js'));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}



app.listen(port, function(){
    console.log('API PLAYGROUND running on port 3000');
    
});

