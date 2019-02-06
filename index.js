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
        // console.log(response.statusCode);
        let crypto = req.body.crypto;
        let fiat = req.body.fiat;
        // console.log("the crypto is " + crypto);
        // console.log("the fiat is " +fiat);
        
        const baseUrl = "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
        const finalUrl = baseUrl + crypto + fiat;
        
        request(finalUrl, function(error, response, body){
            let data = JSON.parse(body);    
            let price = data.last;
            let currentDate = data.display_timestamp;
            //can't do multiple res.send so use res.write for temp storage...
            res.write("<p>The current date is " + currentDate + "</p>");
            res.write("<h1>The current price of " + crypto + " is: " + price + " in " + fiat +  "</h1>");


            console.log(price);
        // res.send("<h1>The current price of " + crypto + " is: " + price + " in " + fiat +  "</h1>")
        res.send();
    })
});




app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});


app.listen(3000, function(){
    console.log('app running on port 3000!');
    
});

