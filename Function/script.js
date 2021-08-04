'use strict';
/*const bookings = [];
const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 888);
const flight = 'LH123';
const jonas = {
  name: 'Thuan',
  passport: 832040,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 832040) {
    alert('Checked in');
  } else alert('Wrong passport');
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original string : ${str}`);
  console.log(`Transformer string : ${fn(str)}`);
  console.log(fn.name);
};
transformer('Javascript is the best', upperFirstWord);
const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greet('Hi')('kxk');
//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('hi')('Thuan'); */
const lufthansa = {
  ariline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book :function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.ariline} flight ${this.iataCode} ${flightNum}`
    );
  },
};
