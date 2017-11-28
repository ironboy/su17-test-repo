// Class definition
class Person {

  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  sayHi(){
    return `Hi there! I am ${this.firstName}!`;
  }

  run(){
    return `I am running as fast as I can. We are good at running in the ${this.lastName} family!`;
  }

}

// Create objects/instances from a class
let person1 = new Person("Anna", "Anderson", 30);
let person2 = new Person("Pelle", "Svanslös", 80);

console.log(person1);
