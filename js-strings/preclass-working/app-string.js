// length methodu

var x = "Mustafa";
var y = "Altaş";

console.log(x.length);
console.log(y.length);

// output:
// 9
// 0

// concat() yönetim

var x = "Mustafa ";
var y = "Altaş";
var z = x.concat(y);

console.log(z);

// output:
// Mustafa Altaş

// charAt() Method

var x = "Mustafa";

console.log(x.charAt(0));
console.log(x.charAt(4));

// output:
// M
// a

// includes methodu

var x = "Merhaba nasılsın, iyi misin?";
var y = x.includes("nasılsın");

console.log(y);

// indexOf() ve lastIndexOf() Yöntemi

var x1 = "Hello John, welcome to Clarusway.";
var y1 = x1.indexOf("o");

console.log(y1);  //4

var x2 = "Hello John, welcome to Clarusway.";
var y2 = x2.indexOf("o",5);

console.log(y2); //7

var s = "Hello John, welcome to Clarusway. How are you John?";
var n = s.lastIndexOf("John");

console.log (n);  //46

// replace yöntemi 

var s = "Hello John, welcome to Clarusway.";
var rep = s.replace("Clarusway", "Course")

console.log (rep);

var str = "Hello John, welcome to Clarusway.";
var rep = str.replace(/JOHN/i, "Edward");   //To replace case insensitive, use a regular expression with an flag (insensitive):/i

console.log (rep);


// search() Yöntemi

var s = "Hello John, welcome to Clarusway.";

console.log (s.search("Clarusway"));

// ❗ Uyarı :
// IndexOf() ve search()olmak üzere iki yöntem eşit mi? EŞIT Değİl.
// ● Yöntem ikinci bir başlangıç pozisyonu argümanı alamaz.
// ● Yöntem güçlü arama değerleri (normal ifadeler) alamaz.search()indexOf()

// slice() Yöntemi

var s = "Hello John, welcome to Clarusway.";

console.log (s.slice(0, 5));
console.log (s.slice(6, 10));
console.log (s.slice(12));
console.log (s.slice(12, -10));

// split() Yöntemi

var s = "Hello John, welcome to Clarusway."

var arr = s.split(" ");

console.log (arr);

// substr() Method

var s = "Hello John, welcome to Clarusway."

console.log (s.substr(23, 9));

var s = "Hello John, welcome to Clarusway."

console.log (s.substr(23));


// substring() Yöntemi

var s = "Welcome to Clarusway."

console.log (s.substring(5, 10));

// toLowerCase() Method
var s = "WELCOME TO CLARUSWAY";

console.log(s.toLowerCase());

// toUpperCase() Method

var s = "Welcome to Clarusway"

console.log(s.toUpperCase());

// trim() Yöntemi
var s = "                 Welcome to Clarusway                 "

console.log (s. trim());