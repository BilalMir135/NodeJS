//Module Wrapper
/* (function(exports,require,module,__filename,__dirname){
    //this function wrap entire code file 
}) */

console.log(__filename, __dirname);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

module.exports = Person;
