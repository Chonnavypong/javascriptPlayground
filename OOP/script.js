"use strict";

// constructor function
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);
console.log("Student Constuctor");
console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study in ${this.course}`);
};

const Mike = new Student("Mike", 2020, "Computer Science");

console.log("Mike Constructor");
console.dir(Mike.__proto__.constructor);

Mike.introduce();

console.log("Student");
console.dir(Student.__proto__);
console.dir(Student.prototype);
console.log("Mike");
console.dir(Mike.__proto__);
console.log("Person");
console.dir(Person.__proto__);
console.dir(Person.prototype);

// Object Create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study in ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "computer science");

jay.introduce();
