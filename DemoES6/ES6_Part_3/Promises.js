var promise = new Promise(function (resolve, reject){
    reject('Error!');
    resolve('Success!');
});
promise.then(
    function(success){
        console.log(success);
    },
    function(error){
        console.log(error);
    }
);
//cath in Promise
var promise1 = new Promise(function (resolve, reject){
    resolve('Success!');
    reject('Error!');
});
promise1.then(function (message){
    console.log(message);
}).catch(function (message){
    console.log(message);
});
//
function a(x) {
    return new Promise((resolve, reject) => {
        if(x > 0) {resolve('Greater than 0');}
        reject('less than 0');
    });
}
a(-1).then ((value) =>{
    console.log(`1st then: ${value}`);
    return value;
}).catch((err) => {
    console.log(`1st catch: ${err}`);
    throw new Error(err);
}).then((value) => {
    console.log(`2nd then: ${value}`);
}).catch((err) => {
    console.log(`2nd catch: ${err.message}`);
});

//
function even (num){
    return promise3 = new Promise((resolve, reject) => {
        if(num % 2 == 0) {resolve("is even number !");}
        reject("is not even number !");
    });
}
even(8).then((value) => {
    console.log(`1st then: ${value}`);
    return value;
}).catch((err) => {
    console.log(`1st catch: ${err}`);
    throw new Error(err);
}).then((value) => {
    console.log(`2nd then: ${value}`);
}).catch((err) => {
    console.log(`2nd catch: ${err.message}`);
});
