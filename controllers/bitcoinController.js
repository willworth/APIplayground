exports.getBitcoin = (req, res, next) => {
    res.render('bitcoin', {
        pageTitle: 'Bitcoin Exchange'
      });
  };
  


exports.postBitcoin = (req, res, next) =>{
   
    let crypto = req.body.crypto;
    let fiat = req.body.fiat;
    
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
};


 