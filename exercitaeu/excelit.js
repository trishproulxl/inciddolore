class Person {
  constructor(name) {
    this._name = name; // Private or protected property
  }

  getNameObject() {
    // Creating an object with the name property
    return {
      name: this._name,
    };
  }
}

const person = new Person("Alice");
const nameObject = person.getNameObject();

console.log(nameObject); // { name: 'Alice' }
