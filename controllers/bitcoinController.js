const request = require('request');

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
        console.log(price);
    res.render('bitcoinResult', {
        pageTitle: 'Bitcoin Exchange',
        currentDate: currentDate,
        crypto: crypto,
        price:price,
        fiat:fiat
    });



})
};



// https://apiv2.bitcoinaverage.com/indices/global/ticker/BTCUSD


