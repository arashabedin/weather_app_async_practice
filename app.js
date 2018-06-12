const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
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

geocode.geocodeAdress(argv.address, (errorMessage, results) => {
if(errorMessage){
    console.log(errorMessage);
}
    console.log(JSON.stringify(results, undefined, 2));
});