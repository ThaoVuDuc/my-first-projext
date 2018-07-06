let n1 = 2;
console.log(Number.isNaN(n1));
let s1 = "ThaoVuDuc";
console.log(Number.isNaN(s1));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(1%0));
console.log(Number.isNaN(null));
//check isInteger
console.log("check integer");
console.log(Number.isInteger(19));
console.log(Number.isInteger(18.6));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(null));
console.log(Number.isInteger(undefined));
console.log(Number.isInteger(0));