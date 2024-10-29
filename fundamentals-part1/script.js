/*let js='amazing';
if(js==='amazing') alert("javascript is fun!!")
console.log("jonas");

let firstName = 'matilda';

//if the varible you want to use is a key word in javascript you can add either $ or _ sign at the beginning of
//the word
let _function = "full stack developer"
let $new = "internship"

console.log(firstName+" "+_function+" "+$new);

let PI = 3.1415;

// proper way of naming variables
let myFirstJob = "full stack developer";
let myCurrentJob = "chief excutive manager";

//incorrect way of naming variables
let job1="full stack developer";
let job2="ceo";
*/

/*
let javascript
console.log(typeof javascript) //undefined
javascript=true
console.log(typeof javascript); //booolean
javascript="yes!"
console.log(typeof javascript); //string
javascript=123;
console.log(typeof javascript); //number
*/
/*
there are 3 ways declaring variables in javascript
    1. let : if the variable is mutable throughout the code
    2. const: if the variable is immutable
    3. var: the old way of declaring variable similar to let but i think they have differences we will see in the comming lesson

*/
/*const birthYear=1996;
console.log(birthYear);
let num;
num=2;
console.log(num);
*/


//challenge #1;
/* Write your code below. Good luck! 🙂 */

/*const massMark=78;
const heightMark=1.69;
const massJohn=92;
const heightJohn=1.95;
const BMIMark=massMark/(heightMark**2);
const BMIJohn=massJohn/(heightJohn**2);
console.log("Johns BMI is: "+BMIJohn);
console.log("Marks BMI is: "+BMIMark);
const markHigherBMI=BMIJohn>BMIMark;
console.log("is johns BMI greater than Marks "+markHigherBMI);
*/

/*
//string literals
const firstName='solomon';
const birthYear=1996;
const job='software engineer'
const company="Google"
const now=2024;
const solomon="i'm "+firstName+", a "+(now-birthYear)+" year old "+ job+" from "+company;
console.log(solomon);
const solomonStringLiteral=`i'm ${firstName}, a ${now-birthYear} years old ${job} from ${company}`;
console.log(solomonStringLiteral);
console.log('string with \n\
    multiple \n\
    lines');
console.log(`string with
    multiple
    lines`);
    */

/*
    //type conversion
const inputYear ='1999';
console.log(Number(inputYear)) //changes the type from string to number
console.log(Number('solomon')) //NaN says its not a number
console.log(String(23)) //consoles the string type of 23

//type coercion
console.log('i am '+27+ ' years old') //js changes the number into string format
*/

/*
//5 falsey values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

const money=0;
if(money){
    console.log(`don't spend it all`);
}
else{
    console.log(`you should get a job`);
}
let height;
if(height){
    console.log(`yay the height is defined`);
}
else{
    console.log(`ohh noo the height is undefined`);
}*/

//ternary operator
const age=19;
age>=18 ? console.log("I like to drink wine 🍷"):console.log("I like to drink water 💧");
const drink =age>=18 ? 'bear 🍻':'water 💧'
console.log(`I like to drink ${drink}`);

//CHALLENGE #4
const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip= bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
