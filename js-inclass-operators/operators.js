// var x = 3;
// var y = 5;
// var z = 8;
// var t = "2";
// var u = t-y;



// console.log(x+y);
// console.log(x+t); //ifade string olur.

// console.log(z-t);  // ifade number olur .
// console.log(t - x);  // number değer döndürür.

// console.log(typeof u, u); //output : number -3

// console.log(z/t);  // number değer döndürür.
// console.log(z*t);  // number değer döndürür.

// console.log(5%2); // output == 1


// var a = 5;
// var b = 0;

// console.log(a/b);  // infinity değerini verir.

// var c = 100 + 50 * 3;

// console.log(c);  /// cvp = 250




// // increment
// var r = 10;

// console.log(a++);  // cvp = 10
// console.log(a);  // cvp = 11

// var u = 5;
// console.log(u);  //5
// console.log(++u);  // 6
// console.log(++u);  //7


// var f = 8;
// console.log(f--); // 8
// console.log(f); //7


// var c = 8;

// var d = c++ ;

// console.log({d}, {c});  // d : 8, c : 9


// console.log(c++ + ++c); // 8 + 10 = 18

// // kullanıcıdan alınan veriler her zaxma stringdir.

// var input = prompt("Enter username")  // veri girişini sağlayan fonk.
// var input = +prompt("Enter username")  // girilen değer number olmasını sağlıyor .


// var a = 4;
// var b = "4";

// var c = a == b;  //olumsuzu !=
// var d = a === b;  //olumsuzu !==

// console.log(c);  //true
// console.log(d);  //false


// var a = "2";
// var b = 10;

// console.log(b > a);  //true


// var a = "a";
// var b = 10;

// console.log(b > a);  //false

// var a = "a";
// console.log(a.charCodeAt());  //ascii'ye göre 97


var a = (2 || 3);
console.log(a);  //ilk true'u alır

var b = (2 && 3);
console.log(b); // son true döner


var c = null && NaN;
console.log(c);  // ilk false döner


var a ;

console.log(a ?? "Null veya undefined"); //Null veya undefined


var b = Null;

console.log(a ?? b);  //a

var c = 1;
console.log(c ?? "Null veya undefined");  //1 değerini döndürür.

//------ null ve NaN olanda ifade varsa "??" ile işleme sokulur ve karşılığı alttaki sonuçlar gibi olur .
console.log(null ?? NaN);  // her durumda NaN döner 
console.log(NaN ?? null);  // her durumda NaN döner 

var a ;

console.log(a ?? "undefined");  // undefine döner 

var b = null;

console.log("null değeri almış" ?? b);  // "null değeri almış ifadesi döner."


console.log("object" ?? 2);  // object
console.log(2 ?? "object");  // 2

console.log("object" || 2); 
console.log(2 || "object");
