//VARIABLES | FUNCTIONS | OBJECTS

//variables declarations
let myString: string = "Hello, world!"; // variable of type string
const myNumber: number = 42; // variable of type number

//Type Inference
//type of a variable can be inferred from its value 
//if you don't specify a type explicitly
let myString2 = "Hello, world!"; // type inferred as string
const myNumber2 = 42; // type inferred as number

//"any" type
// its type can be set to anything and can change during runtime
let variable: any = "hello";
variable = 123;

//---------------------------------------------------/

//function syntax
function addNumbers(a: number, b:number): number {
    return a+b;
}

//arrow function syntax
const productOfNumbers = (a: number, b:number): number => a*b;

//Optional Parameters(?)
function printName(firstName: string, lastName?: string) {
  console.log(firstName + ' ' + lastName);
}
printName('John'); // output: John undefined
printName('John', 'Doe'); // output: John Doe

//Default Parameters
function sayHello(name: string = "World") {
  console.log(`Hello, ${name}!`);
}

//Rest parameters
function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0)
}
console.log(sumNumbers(1,2,3,4,5)); // output: 15

//Function Overloading
//to define multiple function signatures for a single function
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}
console.log(add(1, 2)); // output: 3
console.log(add('Hello', 'World')); // output: HelloWorld

//this keyword:
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    // regular function
    return this.firstName + ' ' + this.lastName;
  },
  getFullNameArrow: () => {
    // arrow function
    return this.firstName + ' ' + this.lastName;
  }
};
console.log(person.getFullName()); // output: John Doe
console.log(person.getFullNameArrow()); // output: undefined undefined









