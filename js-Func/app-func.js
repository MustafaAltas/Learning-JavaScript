// let student = "Mustafa";

// function sayHi(studentName) {
//     console.log(`Welcome ${studentName}`);

// }

// console.log(sayHi(student));


// let student = ["john", " jane", "joe"];

// function sayHi (studentName) {
//     for (let i = 0; i<student.length; i++){
//         console.log(`Welcome ${studentName[i]}`);
//     }
// }

// console.log(sayHi(student));


// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5,6));


// function sum(a,b, ...others) {
//     console.log(arguments);
//     console.log(others);
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum;
// }

// console.log(sum(1,2,3,4,5,6));


// const bill = function(item,tax) {
//     let total = 0;
//     for (let i = 0; i < item.length; i++) {
//         total += item[i] + item[i] * tax
        
//     }
//     return total;
// }

// console.log(bill([10,15,20] , 0.18));


// // function bolme (num1,num2) {
// //     if (num2 === 0) {
// //         return "Zero division Error"
// //     }else {
// //         return num1 / num2
// //     }
// // }


// function bolme (num1,num2) {
//     if (num2 === 0)  "Zero division Error"
//     return num1 / num2

// }

// function bolme (num1, num2) {
//     return num2 ? num1 / num2 : "zero division error!"
// }

// console.log(bolme(12,6));


// function pascalNumber1(n){
//     let sum = 0;
//     for(let i = 1; i < n+1; i++){
//     sum +=i
//     }
//     return sum
//     }

//     console.log(pascalNumber1(5));

// function pascalNumber2(n) {
//     return (n * (n+1 /2))
// }

// function pascalNumber3(n) {
//     if (n === 1) return 1;
//     return n + pascalNumber3(n - 1)
// }



// // geleneksel fonksiyon
// function add100(a) {
//     return a + 100
// }

// //funcktion expression

// let toplam = function {a}{return a + 100}


//arrow function

// let ahmet = (a) => {return a + 100}

// let mustafa = (a) => a + 100;
// console.log(mustafa(10));


