
//----While statement----

var i = 0;
var toplam = 0;

while (i < 10) {
    var toplam = toplam + i;
    i++;
}

console.log(toplam);


//-------do... while statement -------

var toplam = 0;
var i = 0;

do {
    toplam = toplam + i;
    i ++;
} while (i < 10);


console.log(toplam);


//-------for statement -------

var çarpım = 1;

for (var i = 1; i < 6; i++) {
    çarpım = çarpım * i
}

console.log(çarpım);

//---------- break statement ---------

var i = 0;

while (i < 10) {
    if (i === 3) {
        break;
    }
    console.log(i);
    i += 1
}

//-----continue statement--------

for (var i = 4; i < 8; i++) {
    if (i === 5 ){
        continue
    }
    console.log(i);
}

console.log(i);