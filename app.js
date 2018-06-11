const request = require('request');

request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=%22ermelundsvej%2043',
    json:true
},(error, response, body)=>{

console.log(body);
});