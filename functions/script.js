'use strict';
/*const bookings = [];
const creatBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
//get data from user
creatBooking('LH123');
creatBooking('LH123', 2, 800);
creatBooking('LH123', 2);
creatBooking('LH123', undefined, 4000);
*/
////////////////////////////////////////////
//call Back functions
/*const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`original string ${str}`);
  console.log(`the transformed string ${fn(str)}`);
  console.log(`transformed by ${fn.name}`);
};
const str = 'solomon is the most intellegent student in computer science';
transformer(str, upperFirstWord);
transformer(str, oneWord);
*/
/////////////////////////////////////////
//functions returning functions
/*const greet = function (greating) {
  return function (name) {
    console.log(`${greating} ${name}`);
  };
};
const greatings = greet('Good morning');
greatings('solomon');
greet('Good afternoon')('solomon');
const greatWithArrow = greating => name => console.log(`${greating} ${name}`);
greatWithArrow('good evening')('solomon');
*/
/////////////////////////////////////////
//the call and apply method
/*const beersheva = {
  name: 'beersheva',
  iataCode: 'BSIL',
  bookings: [],
  book(fullName, flightNum) {
    console.log(
      `${fullName} booked a flight on ${this.name} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, fullName });
  },
};
beersheva.book('sheldon cooper', 676);
console.log(beersheva);

const telaviv = {
  name: 'telaviv',
  iataCode: 'TAIL',
  bookings: [],
};
const book = beersheva.book;

book.call(telaviv, 'solomon kassahun', 606);
console.log(telaviv);

//apply method
const flightDetail = ['Gizachew kassahun', 879];
book.apply(telaviv, flightDetail);
console.log(telaviv);

book.call(telaviv, ...flightDetail);
console.log(telaviv);
*/
const poll = {
  question: 'what is your favourite programming language?',
  options: ['0: Javascript', '1: python', '2:Rust', '3: c++'],
  registerNewAnswer() {
    const choose = Number(
      prompt(
        `${this.question} \n ${this.options.join('\n')}\n (choose your answer)`
      )
    );
    typeof choose === 'number' &&
      choose < this.options.length &&
      this.answers[choose]++;
    console.log(this.answers);
  },
  // displayResults() {
  //   console.log(this.answers);
  // },
  answers: new Array(4).fill(0),
};
//const register = poll.registerNewAnswer;
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
