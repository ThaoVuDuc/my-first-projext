let getCountdownIterator  = (arr) => {
    let currentIndex = 8;
    return {
        next(){
            return currentIndex != 0
            ? {value: arr[currentIndex--], done: false}
            : {done: true};
        }
    };
}

let iterator = getCountdownIterator ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
while(1){
    let {value, done} = iterator.next();
    if(done) break;
    console.log(value);
}