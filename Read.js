//1. What are key words in JavaScript?
//Keyword are predefined words that are part of the javaScript language Syntax,
//They have special meaning and cannot be used as variable names.

//Examples:let, var, const, if, else, function, return, class, for, while

//2. What are reserved keywords in JavaScript?
//These are words reserved by the language (for current or future use) and cannot be used as identifiers (variable names, function names, etc).

//Examples:break, case, catch, continue, debugger, default, delete, do, else,
//export, extends, finally, for, function, if, import, in, instanceof,
//new, return, super, switch, this, throw, try, typeof, var, void, while, with, yield.

//3. When to use let, var, const ?

Example:
//let
let name = "Naheem";
console.log(name)

//var
var age = 20;
var age = 21; // redeclaration allowed

// const
const country = "Nigeria";
// country = "Ghana"; ❌ Error!

//When to use:

//let: For variables that will change

//const: For variables that should NOT change

//var: Legacy code, avoid in modern JavaScript

//4. Variable Concepts:

//Variable: A container for storing data

//Variable Declaration: Telling the browser a variable exists

//Variable Assignment: Giving the variable a value

let city; // declaration
city = "Abuja"; // assignment.

//5. Naming Convention Example
let user_name = "Naheem"; // snake_case
let userName = "Mujaheed"; // camelCase (preferred)
let UserName = "Nabeelah"; // PascalCase (used for classes)
let USER_NAME = "Admin"; // UPPER_CASE (constants)

//6. JavaScript Data Types
//Primitive Types: String, Number, BigInt, Boolean, undefined, null, Symbol.
//Non-Primitive (Reference): Object, Array, Function.

//7. Primitive Data Types
let a = "I am Naheem";              // String
let b = 'Here is Mujaheed';         // String
let c = "Is Nabeelah Home";         // String
let d = true;                       // Boolean
let e = false;                      // Boolean
let f = ["I love Python"];          // Object (but contains primitive strings)
let g = 10000;                      // Number
let h = Symbol("Naheem");           // Symbol
let i = 5 / 0;                      // Infinity
let j = Math.sqrt(-1);              // NaN
let k = Math.pow(0, 0);             // 1
let l = Math.tan(Math.PI / 2);      // Very large number (approx ∞)
let m = 9007199254740993n;          // BigInt

// Browser alert & console:
alert(a);
console.log(h, j, i, m);

//8. Result of:
let naheem;               // undefined
//let naheem = null;        // null

console.log(typeof naheem); // "object" (for null)

//9. String Transformation with Special Characters
//Naming Conventions:
let ADD_TAB = "\t"; // Tab
let NEW_LINE = "\n";
let BACK_SLASH = "\\";
let SINGLE_QUOTE = "\'";
let DOUBLE_QUOTE = "\"";
let COLON = ":";
let DOUBLE_SLASH = "//";

//Example usage in string:

let formattedText = "Line one" + NEW_LINE +
ADD_TAB + "Tabbed" + BACK_SLASH + SINGLE_QUOTE + DOUBLE_QUOTE + COLON + DOUBLE_SLASH;

console.log(formattedText);
//You can now build on this to replace (a) as required by combining string methods.

//10. Identify a String
//Use typeof:

let greeting = "Hello Naheem";
console.log(typeof greeting); // "string"

//11. String Manipulation Tasks
let bio = "Mummy Naheem is a trader. She is a very nice, brilliant, intelligent woman. She runs her business with honesty and dedication. Every morning, she opens her shop early and greets her customers with a warm smile. Her ability to manage finances and stock is admirable. Children love her because she always shares kind words and sometimes sweets. Her community respects her deeply. Mummy Naheem believes in hard work and fairness, and she inspires many young women to become successful entrepreneurs like her";

// I
console.log(bio);

// II
console.log("Length:", bio.length);

// III
console.log(bio.toUpperCase());

// IV
console.log(bio.toLowerCase());

// V
console.log("Index 50:", bio[50]);   // May be space or letter
console.log("Index 5:", bio[5]);
console.log("Index -50:", bio.at(-50)); // Using `.at()` for negative index

// VI
console.log(bio.trim());

// VII
// A
console.log(bio.substring(0, 13)); // "Mummy Naheem"

// B
console.log(bio.substring(0, 13).toUpperCase());

// C
console.log(bio.substring(0, 13).replace(" ", ""));

// D
console.log(bio.substring(255, 313)); // Adjusted based on actual text

// E
console.log(bio.slice(bio.indexOf("she inspires"), bio.length));

// F
console.log(bio.substring(175, 255)); // Manually cut

// VIII
console.log("Index of 'shop':", bio.indexOf("shop"));
console.log("Last Index of 'her':", bio.lastIndexOf("her"));
console.log("Char at 10:", bio.charAt(10));
console.log("Char code at 10:", bio.charCodeAt(10));

//12. Replace Words Using Alert & Console
let newBio = bio
  .replaceAll("Mummy", "Daddy")
  .replaceAll("She", "He")
  .replaceAll("she", "he")
  .replaceAll("Her", "His")
  .replaceAll("her", "his");

alert(newBio);
console.log(newBio);
