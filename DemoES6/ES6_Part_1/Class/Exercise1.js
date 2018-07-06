class Animal {
  constructor(name, thirst, belly){
    this.name = name;
    this.thirst = 100;
    this.belly = new Array();
  }
  drink(){
    return this.thirst -= 10;
  }
  eat(food){
     return this.belly.push(food);
  }
}
const a = new Animal();

a.drink();
a.drink();
console.log(a.thirst);

a.eat("banana");
a.eat("orange");
console.log(a.belly);

// 2.4
class Dog extends Animal{
  constructor(name, breed){
    super(name);
    this.breed = breed;
  }
  bark(){
    console.log(this.name+ " bark !");
  }
}

const dog = new Dog("milu", "madagascan");
console.log(dog.breed);
dog.bark();
