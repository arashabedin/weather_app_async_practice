const request = require('request');
const helpers = require('../helpers/helpers.js');

var getWeather = (lat, lng, callback) =>{
request({
    url:`https://api.darksky.net/forecast/87ffe25d5b176180170f89f346aca346/${lat},${lng}`,
    json:true
    },(error,response, body)=>{
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temperature:  Math.round(helpers.fahrenheitToCelcuis(body.currently.temperature)),
                apparentTemprature: Math.round(helpers.fahrenheitToCelcuis(body.currently.apparentTemperature))
            });
              
        } else {
            callback("Unable to fetch weather");
        }
    });
}

module.exports = {
getWeather

};