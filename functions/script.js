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
//functions returning functions
const greet = function (greating) {
  return function (name) {
    console.log(`${greating} ${name}`);
  };
};
const greatings = greet('Good morning');
greatings('solomon');
greet('Good afternoon')('solomon');
const greatWithArrow = greating => name => console.log(`${greating} ${name}`);
greatWithArrow('good evening')('solomon');
