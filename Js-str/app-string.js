var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry.";

console.log(s.replace("dummy","hello")); // orjinal str değişmez .

console.log(s.replace(/Dummy/i, "Hello"));
console.log(s.replace(/e/g, "--"));

console.log(s.search("text"));
console.log(s.search(/Text/i));


console.log(s.slice(0,5));
console.log(s.slice(6)); //ikinci parametre belirtilmezse geri kalan hepsini alır .


console.log(s.split(" "));
console.log(s.split(""));
console.log(s.split());

console.log(s.substring(22,33));
console.log(s.substring(33,-22));


var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"

console.log(pangram.toUpperCase());
console.log(pangram.toLocaleUpperCase("tr-TR"));

console.log(pangram.toLowerCase());
console.log(pangram.toLocaleLowerCase("tr-TR"));


var x = "              <--Welcome \t to Clarus\tway"

console.log(x);
console.log(x.trim());