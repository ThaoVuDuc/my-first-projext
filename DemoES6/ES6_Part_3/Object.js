//target = ""
var obj = {
    firstName    : "thao",
    lastName     : "vu",
    age     : 21
    
};
var copy = Object.assign({}, obj);
console.log(copy);//{a: 1}
console.log("Full Name : "+copy.firstName+ " " +copy.lastName+", Age : "+ copy.age);

//target have attributes 

var person = {
    name    : "khue",
    age     : 18,
    job     : "Makerting"
};
var copyObj = Object.assign({hometown: "Thai binh"}, person);
console.log(copyObj);
