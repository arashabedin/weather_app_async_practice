const request = require('request');


geocodeAdress = (adress, callback)=> {
const googleMapAPIurl = "https://maps.googleapis.com/maps/api/geocode/json?address="

request({
   // url:'https://maps.googleapis.com/maps/api/geocode/json?address=%22ermelundsvej',
   url:googleMapAPIurl + encodeURIComponent(adress) ,
   json:true
},(error, response, body)=>{

    if(error){
        callback('Unable to connect to Google servers.');
    }else if(body.status === 'ZERO_RESULTS'){
        callback("Unable to find that address.");
    }else if(body.status === 'OK'){
        callback(undefined,{
            address:body.results[0].formatted_address,
            latitude:body.results[0].geometry.location.lat,
            longitude:body.results[0].geometry.location.lng

        });
    }
});
}
module.exports = {

    geocodeAdress
}; 
