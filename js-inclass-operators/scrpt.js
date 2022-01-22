// variable tanımlarken camel case olarak tanımlarız 

// örnek:

// var printCustomerMessage = "Welcome"

// snake case:

// var the_quick_brown_fox_jumps_over_the_lazy_dog = "Hello"

// kebab case or train case:

// the-quick-brown-fox...

// screaming snake case or hazard case:

// bütün karakterleri büyük olan varaible ismi


var x = 999999999999999;  //en fazla 15 basamak olabilir
var y = 9999999999999999;

console.log(x);
console.log(y);


var z = 1.12345678912345678  //en fazla 17 değer olabilir.
var zz = 1.12345678912345678455

console.log(Number.MAX_SAFE_INTEGER)  //9007199254740991


var a = 0.1 + 0.2

console.log(+a.toFixed(2));  // başındaki artı stringtene number type'ne dönüştürür.

console.log(15+25);
console.log(015+025);  // octal(8'li sayı sistemi) sistemde alıyor bu yüzden cevap 31  (7 den büyük rakam olmadığı için ikiside octal'dir.)
console.log(018+028);  // decimal sayı sisteminde sonuç çıkar. 018 = decimal sayı , 028 = decimal sayı


