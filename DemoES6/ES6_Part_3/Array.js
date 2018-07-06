//from in Array : create a new Array instance rom an array an array-like or iterable object
const bar = ["a", "b", "c"];
var arr1 = Array.from(bar);
console.log(arr1);
var arr2 = Array.from("thao");
console.log(arr2);
//Array.of() method create a new array instance with a variable number of arguments
console.log(Array.of(6));
console.log(Array.of(1, 2, 3, 4));
console.log(Array(7));
// the copyWithin() method shallow copies part of an array to anather location in the same array and return it, without modifying its size
arrWithin1 = [1, 2, 3, 4, 5].copyWithin(1);//start : 0, end : 3, target : 1 
console.log(arrWithin1);
arrWithin2 = [2, 3, 4, 5, 6].copyWithin(2);//2, 3, 2, 3, 4
console.log(arrWithin2);
arrWithin3 = [3, 4, 5, 6, 7].copyWithin(2, 1);//3, 4, 4, 5, 6
console.log(arrWithin3);
arrWithin4 = [4, 5, 6, 7, 8].copyWithin(1, 0, 4);//4, 4, 5, 6, 7
console.log(arrWithin4);
//find()
const Student = [
    {
        name    : "thao",
        age     : 21
    },
    {
        name    : "khue",
        age     : 18
    }
];
const findName = Student.find(Student => Student.name == "khue");
console.log(findName);
const findAge = Student.find(Student => Student.age > 20);
console.log(findAge);