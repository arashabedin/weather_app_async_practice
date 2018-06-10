console.log("Starting app");

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

//This would be called after next log eventhough it's zero timeout
setTimeout(()=>{
    console.log("Second settimeout");
},0);

console.log("Finishing up");