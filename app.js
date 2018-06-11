const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=%22ermelundsvej',
    json:true
},(error, response, body)=>{

//console.log(JSON.stringify(body, undefined, 2));
console.log(`Address: ${body.results[0].formatted_address}`);
console.log(`Lattitude: ${body.results[0].geometry.location.lat}`)
console.log(`Lanitude: ${body.results[0].geometry.location.lng}`)
});