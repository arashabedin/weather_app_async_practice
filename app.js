const request = require('request');
const yargs = require('yargs');
const argv = yargs
.options({
    a: {
        demand:true,
        alias: 'address',
        describe: 'address to fetch weather for',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

console.log(argv);
const googleMapAPIurl = "https://maps.googleapis.com/maps/api/geocode/json?address="

request({
   // url:'https://maps.googleapis.com/maps/api/geocode/json?address=%22ermelundsvej',
   url:googleMapAPIurl + encodeURIComponent(argv.address) ,
   json:true
},(error, response, body)=>{

    if(error){
        console.log("Unable to connect to google servers.");
    }else if(body.status === 'ZERO_RESULTS'){
        console.log("Unable to find that address.");
    }else if(body.status === 'OK'){

        //console.log(JSON.stringify(body, undefined, 2));
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Lanitude: ${body.results[0].geometry.location.lng}`);
    }
});