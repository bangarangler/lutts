"use strict";
exports.__esModule = true;
var enums_1 = require("./enums");
var isOpen = false;
var myName = "Scott";
var myAge = 32.04;
var list = [0, 1, 2];
var me = ["Jon", 32, false];
// enum Job {
//   WebDev,
//   WebDesigner,
//   PM,
// }
var job = enums_1.Job.WebDev;
var phone = "Pixel";
var tablet = 3;
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
var sayWord = function (word) {
    if (word === void 0) { word = "Hello"; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(word);
    console.log(otherStuff);
    return word;
};
sayWord("jack", "jill");
// implicit types in TS
var newName = "Jack";
newName = "Jill";
// newName = 10;
console.log(newName);
var newNameTwo = newName;
// newNameTwo = 10;
// Union Types with "pipe" |
// let newNameThree: string | number | boolean = 'jenny'
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin("10");
// makeMargin(false);
// Null Types
var dog = "Sammy";
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
var sayN = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return { name: name, age: age };
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
var createContent = function (contentType) { };
createContent(enums_1.Type.Quiz);
createContent(0);
createContent(2);
// createContent('Video')
console.log(enums_1.Type.Quiz);
// STRING ENUM
// enum Type2 {
//   Video = "VIDEO",
//   BlogPost = "BLOG_POST",
//   Quiz = "QUIZ",
// }
var createContent2 = function (contentType) { };
createContent2(enums_1.Type2.Quiz);
console.log(enums_1.Type2.Quiz);
// CLASSES
var Team = /** @class */ (function () {
    // private teamName: string; prevents outside usage
    // private teamName: string;
    // prevents from being changed
    // readonly teamName: string;
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        // errors if using readonly
        // this.teamName = "changing"
        console.log(this.teamName);
        return "goal!";
    };
    return Team;
}());
var redWings = new Team("Red Wings");
redWings.score();
redWings.teamName;
// MODULES
