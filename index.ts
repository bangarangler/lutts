import { Person } from "./src/interfaces";
import { Job, Type, Type2 } from "./src/enums";

const isOpen: boolean = false;
const myName: string = "Scott";
const myAge: number = 32.04;
const list: number[] = [0, 1, 2];
const me: [string, number, boolean] = ["Jon", 32, false];
// enum Job {
//   WebDev,
//   WebDesigner,
//   PM,
// }
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

// Interface
// interface Person {
//   name: string;
//   // optional param
//   age?: number;
// }
const sayN = ({ name, age }: Person): Person => {
  console.log(name);
  return { name, age };
};

sayN({ name: "Jon", age: 45 });
sayN({ name: "Jon" });
// order or params mater
// sayN(45, "Jon")
// sayN(45)

// ENUMS
// enum Type {
//   Video, // 0
//   BlogPost, // 1
//   Quiz, // 2
// }

const createContent = (contentType: Type) => {};
createContent(Type.Quiz);
createContent(0);
createContent(2);
// createContent('Video')
console.log(Type.Quiz);

// STRING ENUM
// enum Type2 {
//   Video = "VIDEO",
//   BlogPost = "BLOG_POST",
//   Quiz = "QUIZ",
// }
const createContent2 = (contentType: Type2) => {};
createContent2(Type2.Quiz);
console.log(Type2.Quiz);

// CLASSES
class Team {
  // teamName: string same as public
  public teamName: string;
  // private teamName: string; prevents outside usage
  // private teamName: string;
  // prevents from being changed
  // readonly teamName: string;
  constructor(teamName) {
    this.teamName = teamName;
  }
  score(): string {
    // errors if using readonly
    // this.teamName = "changing"
    console.log(this.teamName);
    return "goal!";
  }
}

const redWings = new Team("Red Wings");
redWings.score();
redWings.teamName;

// MODULES
