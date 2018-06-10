
//How the callbacks are made

var getUser = (id , callback) => {
    //Just faking it.. 
    var user = {
        id:id,
        name:'Arash'
    };
    callback(user);
};

//The call function has to be declared in the execution of getUser
getUser(31, (user)=>{
    console.log(user);
});