// function sayHello() {
//     console.log("Hello");
// }

// let userName = "Mustafa"

// function sayHi(name) {
//     console.log(`Hello, ${name}`);
// }

// console.log(typeof sayHi("mustafa"));


// sayHi(userName)

// function sayHi2 (name) {
//     return (`Hello ${name}`)
// }

// console.log(sayHi2("Altaş"));
// console.log(typeof sayHi2("Altaş"));


// function add100(num1) {
//     return num1 + 100
// }

// console.log(add100(23));

// function add100(num1,num2 = 0) {
//     return num1 + num2
// }

// console.log(add100(23));



//------Function expression/-------

// let square = function(num) {return num * num}

// console.log(square(4));


//----Function constructor---------

// const square = new Function("num","return num * num");

// console.log(square(3));
// console.log(typeof square());

// let sum = function(a,b){return a + b;}

// let addTwo = function(num1) {return sum(+num1,2)}

// console.log(addTwo(5));
// console.log(addTwo("4"));

//----shortcut tanımlama-----
// function sayHello(name) {
//     name && console.log(`Hello ${name}`);
// }

// sayHello("Mustafa")
// sayHello()



//Fonksiyon kendi verilen değeri değiştirmeyecek

function square(num1) {
    num1 *= num1;
    // myNum = num1 * num1; //globalde istenmeyen durum
    // return myNum
    return num1;
}


let myNum = 4;

console.log(square(myNum));



let student = {};

student.name = "Mustafa"

function sayHi3(student) {
    console.log(`Hello ${student.name} from entry point`);
    student.name = "Ahmet"
    console.log(`Hello ${student.name} inside function`);
    student = {name : "Leon"}
    console.log(`Hello ${student.name} inside function`);
}

sayHi3(student)


