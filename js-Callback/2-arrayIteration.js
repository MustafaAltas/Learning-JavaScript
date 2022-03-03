// *-----------------------------------------------------
// *                      FOREACH
// *-----------------------------------------------------

const students = ["Bedirhan", "Tuncay", "Mesut", "Enes", "Onur"];

//? 1.Method
const print = (name) => {
  console.log(name);
};

students.forEach(print);

//? 2.Anynmous Method
console.log("*******************************");
students.forEach((student) => console.log(student));

//? Example
const payments = [100, 300, -200, 500, -400, 225, 1000, -700];

let sum = 0;
payments.forEach((p) => (sum += p));
console.log("SUM:", sum);

//! foreach doesnt return
// const sumofPayments = payments.forEach((p) => (sum += p))
// console.log(sumofPayments);

//* Example
payments.forEach((p, i) => {
  p > 0
    ? console.log(i + 1, `You deposit ${p}`)
    : console.log(i + 1, `You withdraw ${p}`);
});

//*-----------------------------------------------------
//*                      MAP
//*-----------------------------------------------------

//* multiply each element of array by 2
//*-------------------------------------------------------
const numbers = [2, 3, 5, 6, 8];

const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers);
