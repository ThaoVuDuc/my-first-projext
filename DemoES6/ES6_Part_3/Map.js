var myMap = new Map();
var keyString = 'a string',
keyObj = {},
keyFunc = function() {},
keySum = 0;
//setting the values 
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, 'value associated with keyObj ');
myMap.set(keyFunc, 'value associated with function');
myMap.set(keySum, 8);
console.log(myMap);
console.log(myMap.get(keyString));
console.log(myMap.get(keyFunc));
console.log(myMap.size);
//delete a element 
myMap.delete(keySum);
console.log(myMap.size);
//check the existence element 
console.log(myMap.has(keyObj));
//get list key 
for(var key of myMap.keys())
{
    console.log(key);
}