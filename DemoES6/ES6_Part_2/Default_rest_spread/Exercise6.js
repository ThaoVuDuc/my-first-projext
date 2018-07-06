const sumFirst3number = (a, ...b) =>{
  let arr = b.filter((_, index) => index < 2);
  var t = arr.reduce((sum, aro, index, arr) => {return sum += arr[index]});
  return a + t;
}
// dvd = (...b) => b[0]+b[1]+b[2];

console.log(sumFirst3number(3, 6, 3, 4, 5, 7));
//console.log(dvd(3, 6, 3, 4, 5, 6, 7));