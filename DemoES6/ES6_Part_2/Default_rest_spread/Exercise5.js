const sumExceptLast =  (a, ...b) => {
  var c = b.filter((_, index, arr) => index != arr.length - 1);
  //console.log(c);
  var t = 0;
  c.forEach(function (element){
    t += element;
  });
  return a + t;
}

console.log(sumExceptLast(1, 2, 3, 4, 5, 6));
 