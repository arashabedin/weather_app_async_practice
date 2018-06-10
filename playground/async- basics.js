console.log("Starting app");

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

// This would be called after next log eventhough it's zero timeout.
// The reason is the process of event loop, The logs that are not
// surronded by setTimeout would be executed at Call Stack first and
// but the rest are processed into Node API and Callback Queue first
setTimeout(()=>{
    console.log("Second settimeout");
},0);

console.log("Finishing up");