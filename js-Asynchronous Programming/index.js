console.log('» index.js is running');
/* 
let id = setTimeout(() => {
  console.log('» async programming is amazing');
}, 2000);
console.log(id);
clearTimeout(id);
console.log('continuing...');
let id2 = setTimeout(() => {
  console.log('»22 async programming is amazing');
}, 2000);
console.log(id2);
 */

//? an example

const slowTask = () => {
  let i = 0;
  let result = { firstName: 'John', lastName: 'Doe' };
  do {
    i++;
    // some long operation
  } while (i < 1_500_000_000);
  return result;
};

function wait(ms) {
  const start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

// console.log('» A..1');
// wait(3000); // 1 second wait
// console.log('» ...2');
// // setTimeout(() => {
// //   let res = slowTask();
// //   console.log(res);
// // });
// alert('!');
// console.log('» ...3');
// console.log('» ...4');

// console.time();
// slowTask();
// console.timeEnd();

// //? synchronous example
// console.time('»» olc');
// console.timeLog('»» olc');
// console.log('hello');
// wait(1500);
// console.timeLog('»» olc');
// console.log('world');
// console.timeEnd('»» olc');

//? timeout example
// console.time('»» time elapsed');
// setTimeout(() => {
//   console.warn('this message is printed after 2 seconds');
//   console.timeEnd('»» time elapsed');
// }, 2000);
// wait(2000);
// console.timeLog('»» time elapsed');

//? another example
// console.time('»» setTimeout example');
// console.timeLog('»» setTimeout example');
// setTimeout(() => {
//   console.warn('this is the third message');
//   console.timeLog('»» setTimeout example');
// }, 3000);
// setTimeout(() => {
//   slowTask();
//   console.error('this is the first message');
//   console.timeLog('»» setTimeout example');
// }, 1000);
// setTimeout(() => {
//   console.warn('this is the second message');
//   console.timeLog('»» setTimeout example');
// }, 2000);

//! callback hell

// setTimeout(() => {
//   console.log('john:Hi');
//   setTimeout(() => {
//     console.warn('Sarah: Hello');
//     setTimeout(() => {
//       console.log('John: How Are you?');
//       setTimeout(() => {
//         console.warn('Sarah: Fine and you?');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// console.time('»» callback hell example');
// console.timeLog('»» callback hell example');
// setTimeout(() => {
//   console.warn('this is the first message');
//   setTimeout(() => {
//     console.warn('this is the second message');
//     setTimeout(() => {
//       console.warn('this is the third message');
//       setTimeout(() => {
//         console.warn('this is the fourth message');
//         setTimeout(() => {
//           console.warn('this is the fifth message');
//           console.timeEnd('»» callback hell example');
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//* SETINTERVAL
// function hello() {
//   console.log('Hello world');
// }
// setInterval(hello, 2000);

// function showTime() {
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }
// let display = setInterval(showTime, 5000);

// program to stop the setInterval() method after five times
// let count = 0;
// let interval = setInterval(function () {
//   count += 1;
//   if (count === 5) {
//     clearInterval(interval);
//   }
//   let dateTime = new Date();
//   let time = dateTime.toLocaleTimeString();
//   console.log(time);
// }, 2000);

// let count = 10;
// let intervalId = setInterval(function () {
//   if (count === 0) {
//     console.log('Time is over');
//     clearInterval(intervalId);
//   } else {
//     console.log(count);
//     count--;
//   }
// }, 1000);

//? setInterval example

const tick = () => {
  counter++;
  console.warn(`» ${counter}`);
  if (counter == 5) {
    clearInterval(intervalId);
  }
};
const intervalId = setInterval(tick, 1000);

let counter = 0;
