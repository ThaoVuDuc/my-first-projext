var person = {
  name: 'Joe',
  age: 21,
  married: true,
  hobbies: ['football', 'tennis', 'cooking'],
  contact: {
    phone: '0123456789',
    email: 'name@example.com',
  },
};
//5.1 get name and age of person
var {name : namePerson, age : agePerson} = person;
console.log("Name : "+namePerson);
console.log("Age : "+agePerson);

//5.2
var myName, myAge;

({myName,myAge} = {myName:"yasuo", myAge: 20})
console.log("Name : "+myName);
console.log("Age : "+myAge);

//5.3 get hobbies
var {hobbies: [hobby1, hobby2, ]} = person;
console.log(hobby1);
console.log(hobby2);

//5.4 get married

function getMarried({married}){
  return married;
}

console.log(getMarried(person));

//5.5
function getPhoneEmail({contact:{phone, email: {emailPerson = "you@mail.com"}}}){
  console.log("Phone is : "+phone+" mail is : "+emailPerson);
}

getPhoneEmail(person);
