// What is hoisting*
let name;
// console.log('name before assignment', name);
name = 'zach';
// console.log('name after assignment ', name);

// sayHi();

function sayHi() {
  console.log('Hi!');
}

// let x = 2;
// console.log('x + y', x + y);
// let y = 1;

//

// What does the statement ‘use strict’ do *
// 'use strict';

function thisLogger() {
  console.log('this in thisLogger ', this);
}

// thisLogger();

function strictFunction() {
  'use strict';
  console.log('this is strictfunction ', this);
}
// strictFunction();
//

// How does inheritance work in JavaScript *
let myObj = { name: 'Zach', age: 26 };
// console.log(myObj.__proto__);
// console.log('Does myObj have a name property? ', myObj.hasOwnProperty('name'));
// console.log(
//   'Does myObj have a toString property? ',
//   myObj.hasOwnProperty('toString')
// );

function Person(name, age) {
  this.name = name;
  this.age = age;
}
// console.log('Prototype of Person ', Person.prototype);
let zach = new Person('Zach', 25);
// console.log('zach prototype', zach.prototype);
// console.log('zach.__proto__', zach.__proto__);

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  getLegCount() {
    return this.legs;
  }
}

class Dog extends Animal {
  constructor(legs, bark) {
    super(legs);
    this.bark = bark;
  }

  makeNoise() {
    console.log(`The dogs barks. The bark is ${this.bark}`);
  }
}

let max = new Dog(4, 'Loud');
// console.log(max.__proto__);
//

// What is event bubbling in the DOM *
function buttonClickHandler(e) {
  e.stopPropagation();
  console.log('buttonClickHandler being invoked');
}

function divClickHandler() {
  console.log('divClickHandler being invoked');
}

function spanClickHandler() {
  console.log('spanClickHandler being invoked');
}
//
