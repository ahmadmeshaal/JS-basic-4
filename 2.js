function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;

  
}



function Employee(id, pos) {
  this.employeeId = id;
  this.position = pos;
}

Person.prototype.greet = function() {
    console.log(`Hi ${this.firstName} :) `)
};

let person1= new Person("ahmad","mashal",23);
person1.greet();

let employee= Object.create(Person)
d