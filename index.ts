import './style.css';

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `Instructions: answer each question by writing to console.log
  <br> 
  <br>
  View the output in the console in the bottom right`;

/*

  Instructions
  Answer each question by writing to console.log
  This should take about 3 mins

  View the output in the console in the bottom right

  EXAMPLE:

  Question: Add an exclamation to the end of a var `text`

  Your Answer: console.log(`${text}!`);

  Submitting your code:
  Copy the entire index.ts file contents and send them to submit your work

 */

//
// PART 1 - Strings
// Using the var text... write each answer to console.log
//

const text = 'I am a master at strings' + '!';

// 1 - Replace first occurence of 'a' with the letter z
var text1 = text.replace('a', 'z');
console.log('1: ' + text1);

// 2 - Replace all occurences of 'a' with the letter z
var text2 = text.replace(/a/g, 'z');
console.log('2: ' + text2);

// 3 - Print 0-based position of the first letter 'm'
let index = text.indexOf('m');
console.log('3: ' + index);

//
// PART 2 - Arrays
// Using the var list... write each answer to console.log
//

const list = [2, 6, 3, 7, 9];

// 4 - Sum only the ODD numbers in the list
let sum = 0;
for (let i = 0; i < list.length; i++) {
  if (list[i] % 2 !== 0) {
    sum += list[i];
  }
}
console.log('4: ' + sum);

// 5 - Sort the list highest to lowest
list.sort((a, b) => b - a);
console.log('5: ' + list);

// 6 - Print the numbers in a ~ delimited string like '1~2~3'
const list1 = [2, 6, 3, 7, 9];
var str = '';
for (let i = 0; i < list1.length; i++) {
  str += list1[i];
  if (i < list1.length - 1) str += '~';
}
console.log('6: ' + str);
