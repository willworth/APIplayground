const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const request = require ("request");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
///////////ROUTES/////////

app.post("/", function(req, res){
    // console.log(req.body.crypto); 
    // request("url", function(error, response, body){
    request("https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD", function(error, response, body){
        console.log(response.statusCode);
        console.log(body);

    })
});




app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
    console.log('app running on port 3000!');
    
});

