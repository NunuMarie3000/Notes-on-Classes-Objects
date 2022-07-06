'use strict';
console.log('up and running');

const peopleArray = [];
//object literal notation
let personOne = {
    firstName: 'John',
    lastName: 'Smith',
    age: 24
}
let personTwo = {
    firstName: 'Jacob',
    lastName: 'Smith',
    age: 29
}
let personThree = {
    firstName: 'Jingleheimer',
    lastName: 'Smith',
    age: 47
}
//push all our 'literal' person objects to the array
peopleArray.push(personOne, personTwo, personThree);

//constructor function is used when i wanna make a bunch of instances of the same type of object
function Person(firstName, lastName, age) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.age = age
    //pushes them all into the array as i construct them
    peopleArray.push(this);
}

let personFour = new Person('Matthew', 'Bible', 123);
let personFive = new Person('Mark', 'Bible', 456);
let personSix = new Person('Luke', 'Bible', 789);

//javascript classes
//same thing uses class function
//used for the same reason we use constructor functions, bunch of instances of the same object
//syntax
// class NameOfClass{
//     functionYouWannaAdd(param){
//         function code goes 'here';
//     }
// }

let classArray = [];
class Persons {
    constructor(firstName, lastName, age) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.age = age;
        peopleArray.push(this);
        classArray.push(this);
    }
    //methods don't go in constructors when dealing with classes
    sayHello() {
        console.log(`Hello! My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old!`);
        //this does the same thing, idk why we need to return it, but i'll keep it for my notes
        // return(console.log(`Hello! My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old!`));
    }
}

let personsOne = new Persons('Marie', 'Bradford', 25);
let personsTwo = new Persons('Anndrea', 'Bradford', 23);
let personsThree = new Persons('Joel', 'Bradford', 19);

console.log(peopleArray);

//this iterates through classArray, calling the sayHello method on each persons class
let sayHey = classArray.forEach(person => person.sayHello());

const famArray = [];
//i can only extend from one, for ex, i couldn't extend from Family
//ex, i couldn't do
//class Sibling extends Family
//that's a no
//syntax for extending a class
//creating a new class called Family
class Family extends Persons {
    // needs to know where it's coming from/what it needs
    // reference the parent class
    // see mother and father to see how to add additional properties to an extended class' constructor
    constructor(firstName, lastName, age, mother, father){
        //pass super() method into the constructor, super() references the parent object
        super(firstName, lastName, age, );
        this.mother = mother;
        this.father = father;
        famArray.push(this);
    }
    //adding another method
    myParents(){
        console.log(`My mom is ${this.mother} and my dad is ${this.father}.`);
    }
}

let familyOne = new Family('Ayden', 'Obryant', 11, 'Kim', 'Vic');
console.log(familyOne);
let familyTwo = new Family('Olivia', '???', 10,'Timesha', 'Vic');
let familyThree = new Family('Myles', '???', 5,'Timesha', 'Vic');
//because Family extends Persons, we can access all methods included in Persons, like sayHello() method
let familyIntro = famArray.forEach(fam => {
    fam.sayHello();
    fam.myParents();
})

const cousinsArray = [];

class Cousins extends Persons{
    constructor(firstName, lastName, age, parent){
        super(firstName, lastName, age);
        this.parent = parent;
        cousinsArray.push(this);
    }
    familyReunion(){
        console.log(`Hey cousins! It's me, ${this.firstName} ${this.lastName}, and I'm from ${this.parent}'s side of the family!`);
    }
}
let cousinOne = new Cousins('Kala', 'Diltz', 24, 'Cousin Byron');
let cousinTwo = new Cousins('Alexus', 'Dogan', 25, 'Cousin Tracey');
let cousinThree = new Cousins('Trae', 'Dogan', 21, 'CousinTracey');

let cousinIntro = cousinsArray.forEach(cousin => cousin.familyReunion());