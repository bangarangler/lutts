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

sayWord("scott", "wes");
