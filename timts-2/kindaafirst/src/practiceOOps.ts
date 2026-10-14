

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    console.log("Person constructor instantiated");
    this.name = name;
    this.age = age;
  }

  greet():void {
    console.log("Hello " + this.name);
  }

}

function fak(name: string ){
  console.log(`fak u ${name}`);
}