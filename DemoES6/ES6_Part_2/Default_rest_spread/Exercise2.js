var array1 = [1, 2, 3];
var randomValue = 'something';
var array2 = [4, 5, 6];

const unifyArray = () => {
  var array3 = [...array1,randomValue, ...array2];
  console.log(array3);
}

unifyArray();
