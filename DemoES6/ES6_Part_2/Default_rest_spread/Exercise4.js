//total argument except fitst argument
const sum = (a, ...b) =>{
  return b;
}

var arr = sum(1, 2, 3, 4);
var t = arr.reduce ((tong, a, index, arr) =>{
  return tong += arr[index];
}, 0);
console.log(t);
//direction 2

function sumExceptFirst (a, ...b){
  var s = 0;
  b.forEach(function (element){
    s += element;
  });
  return s;
  }
//var Arr = [1, 2, 3, 4];
console.log(sumExceptFirst(1, 2, 3, 4));
