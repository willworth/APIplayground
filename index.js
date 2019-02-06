const express = require("express");
const bodyParser = require("bodyParser");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));





app.listen(3000, function(){
    console.log('app running on port 3000!');
    
});