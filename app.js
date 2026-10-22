/* JAVASCRIPT MAD LIBS — FULL-BLOCK STARTER
   Write your OWN prompt questions and story. This file deliberately does not contain a completed answer.
   Keep your JavaScript here, not inside index.html.
*/

// PART 1 — INPUTS AND VARIABLES
// TODO: Ask for AT LEAST 6 words/text responses and 2 numbers with prompt().
// TODO: Save all responses in meaningfully named variables using let or const.
// Hint: let animal = prompt("Enter an animal:");
// Hint: let age = Number(prompt("Enter an age:"));


// PART 3 — VARIABLE CHANGES AND CONCATENATION
// TODO: Reassign one let variable after its first value (use the updated value).
// TODO: Combine a quoted string and a variable with +; show the result.
// Hint: let message = "Meet " + animal;

// PART 4 — MATH OPERATORS
// TODO: Use ALL six operators with numeric values: +  -  *  /  %  **
// TODO: Store each result in a clearly named variable.
// TODO: Use at least TWO math results in your final story.
// NOTE: prompt() returns text; use Number(...) before doing math. Avoid division by zero.

// PART 5 — STORY (TEMPLATE LITERAL)
// TODO: Build one original story with BACKTICKS and ${variableName}.
// TODO: Include ALL eight prompt responses, plus at least two math results.
// Hint (not a whole story): let story = `Once, ${animal} arrived...`;

// PART 6 — DISPLAY ON THE WEBPAGE
// TODO: Uncomment and complete the line below once your story variable exists.
// document.getElementById("madlib-output").innerHTML = story;

// FINAL: Add at least three meaningful comments describing your code.
// TEST: Try TWO sets of answers and check the browser console for errors.
let person1 = prompt("Enter a name of a person:");
let person2 = prompt("Enter a name of another person:");
let place = prompt("Enter a place:");
let musicartist = prompt("Enter a music artist:");
let song = prompt("Enter a song title:");
let number1 = Number(prompt("Enter a number:"));
let animal1 = prompt("Enter an animal:");
let verb = prompt ("Enter a verb (-ing ending):");
let emotion1 = prompt("Enter an emotion:");
let number2= Number(prompt("Enter another number:"));
let animal2 = prompt("Enter another animal:");
let dog = prompt("Enter a dog's name:");
let food= prompt("Enter a food:");
let person3 = prompt("Enter a 3rd person:");
let action = prompt("Enter an action:");
let emotion2 = prompt("Enter a a second emotion:");
let weapon1 = prompt("Enter a weapon:");
let weapon2 = prompt("Enter a weapon:");
// MATH 

let number3 = number1 * number2;
let number4 = number1 + number2;









let myStory =(`One day, <strong>${person1}</strong> was fighting <strong>${person2}</strong> in <strong>${place}</strong>, while <strong>${musicartist}</strong> was there singing <strong>${song}</strong>. Then, <strong>${number1}</strong> <strong>${animal1}s</strong> flew through the window and started <strong>${verb}</strong>, because <strong>${animal1}s</strong> were <strong>${emotion1}</strong>. Then, <strong>${number2}</strong> <strong>${animal2}s</strong> decided to join the fight, and then had <strong>${number3}</strong> babies with <strong>${person2}</strong>! Then, <strong>${person1}'s</strong> pet dog, <strong>${dog}</strong>, walked in ordered <strong>${food}</strong> for everyone. However, <strong>${person3}</strong>, who was in the corner <strong>${action}</strong>, was <strong>${emotion2}</strong> so him and his <strong>${number4}</strong> goons pulled out their <strong>${weapon1}s</strong> and started attacking everyone! It led to the death of <strong>${person2}</strong>, and <strong>${person1}</strong> decided to kill <strong>${person3}</strong> with his <strong>${weapon2}</strong>. The end.`);

document.getElementById("madlib-output").innerHTML = myStory;