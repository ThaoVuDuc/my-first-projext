const sum = (x, ...y) => {
  var s = 0;
  var t = y.map((arr) => {
    s += arr;
  });
  return x + s;
}
console.log(sum(0, 1, 2, 3, 4, 5, 6));
