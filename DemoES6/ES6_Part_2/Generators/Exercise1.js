function* countDownIterator() {
let index = 9; 
while(index !=0)
    yield index--;
}

var gen = countDownIterator();
while (1){
    let {value, done} = gen.next();
    if(done) break;
    console.log(value);
}

// console.log(gen.next().value); // 0
// console.log(gen.next().value); // 1
// console.log(gen.next().value); // 2