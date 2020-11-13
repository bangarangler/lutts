const isOpen: boolean = false;
const myName: string = "Scott";
const myAge: number = 32.04;
const list: number[] = [0, 1, 2];
const me: [string, number, boolean] = ["Jon", 32, false];
enum Job {
  WebDev,
  WebDesigner,
  PM,
}
const job: Job = Job.WebDev;
const phone: any = "Pixel";
const tablet: any = 3;

// functions in Typescript

// const sayWord = (word?: string): string => {
//   console.log(word || "Hello");
//   return word || "Hello";
// };

// sayWord("Jon");
// // Optional Params
// // const sayWord = (word?: string): string
// sayWord();
// sayWord(3);

// Default Params
const sayWord = (word = "Hello", ...otherStuff: string[]): string => {
  console.log(word);
  console.log(otherStuff);
  return word;
};

sayWord("jack", "jill");

// implicit types in TS
let newName = "Jack";
newName = "Jill";
// newName = 10;
console.log(newName);

let newNameTwo = newName;
// newNameTwo = 10;

// Union Types with "pipe" |
// let newNameThree: string | number | boolean = 'jenny'
const makeMargin = (x: string | number): string => {
  return `margin: ${x}px`;
};

makeMargin(10);
makeMargin("10");
// makeMargin(false);

// Null Types

let dog: string | undefined = "Sammy";
dog = null;
console.log("dog :>> ", dog);
dog = "Lucie";
dog = null;
dog = undefined;
// dog = 9
// dog = false
