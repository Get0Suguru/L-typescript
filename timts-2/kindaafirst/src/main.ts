function printHelloWithReturn(x: string): string{
  console.log("Hello " + x)
  return "Hello " + x
}

printHelloWithReturn("world")
console.log(printHelloWithReturn("rabdi"))

const y = 10;
const z = "baot";

console.log(`The value of y is ${y} and the value of z is ${z}`);

const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

// defining type || not value of the variable || used : not =
let litralDirection: "North" | "South" | "East" | "West";

litralDirection = "North"; // valid
// litralDirection = "rambo"; // invalid
console.log(litralDirection);

enum Size {
  small,
  mid , 
  large 
}

let x: Size = Size.small;

console.log(Size.small); // Output: 0
console.log(x);



// trying function and its type safe syntax and function as parameter

function printname(firstname: string, lastname: string) : string{
  return `${firstname} ${lastname}`
}

function printFullName(p: (f: string, l: string) => string, f: string, l: string): void {
  const fullName = p(f, l);
  console.log(fullName);
}

printFullName(printname, "John", "Doe");

