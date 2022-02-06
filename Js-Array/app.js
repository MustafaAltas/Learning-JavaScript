// var cars = ["opel", "bmw", "mercedes"];

// console.log(cars);

// var cars2 = Array.of("opel", "bmw", "mercedes")

// console.log(cars2);

// var num1 = new Array(2,10)
// console.log(num1);
//------------------------------------------------------


// var cars = new Array("opel", "bmw", [1,2,true] ,"mercedes")

// console.log(cars[2][2]);

// cars[2] = "mercedes"  //const ile de array tanımlansa olur .
// cars[0] = "tofaş"

// console.log(cars);


//length
/* const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon";

console.log(fruits)
console.log(fruits.length)
//  */

// const fruits = ["Banana", "Orange","Lemon"];
// const vegetables = ['Broccoli','Celery','Parsley','Artichoke']

// console.log(fruits.concat(vegetables));

// console.log("" + fruits);
// console.log(vegetables.toString());

// const daltones = ['Joe','Jack','William','Avarel']

// console.log(daltones.sort());
// console.log(daltones.reverse());  //index olarak ters sıralıyor .  orjinal array i bozar .

// // const num = [40,100,1,5,25,10];  //string olarak sıralar.
// // // console.log(num.sort());

// const num = [40,100,1,5,25,10];
// console.log(num.sort((a,b) => a-b));


//push

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("pears");
// console.log(fruits);
// fruits.push("pears","pineapple",2);
// console.log(fruits);

//pop
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop()
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits.pop());

// console.log(fruits);


//shift

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const deleted = fruits.shift();
// console.log(deleted);
// console.log(fruits);

//unshift
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const uns = fruits.unshift("pears");
// console.log(uns);
// console.log(fruits);

//splice

// var names = ["mustafa", "ali", "kemal"];
// var deleted = names.splice(1,2,"altaş","james");
// console.log(deleted);
// console.log(names);


//slice 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// var citrus = fruits.slice(1,3);
// console.log(citrus); // orjinal array üzerinde değişiklik yapmaz .
// console.log(fruits);

// const months = ["jan", "march", "April","june", "july"];

// const springs = months.slice(1,3);
// const springs1 = months.slice(-4,-2);
// const springs2 = months.slice(1,-2);
// const springs3 = months.slice(2,-7);  //boş array döndürürr

// console.log(springs);
// console.log(springs1);
// console.log(springs2);
// console.log(springs3);


//indexof lastindexof
// const colors = ["Red", "Yellow", "Green", "Blue", "Pink", "Green"];
// const x = colors.indexOf("Green", 3);
// console.log(x);

// const colors = ["Red", "Yellow", "Green", "Blue", "Green","Red","Yellow","Blue"];
// const last = colors.lastIndexOf("Blue");
// console.log(last);