//--------Condition(koşullu) ifadeler----------

var x = 3;

if (x == 3) {
    console.log("Doğru");
}

//---------------------------------------------------

var y = 14;

if (y <= 10) {
    console.log("doğru");
} else {
    console.log("yanlış");
}
//---------------------------------------------------


var time = 21.00;

if (time <= 8.00) {
    console.log("Google Morning");
} else if (time > 8.00 && time <= 18.00) {
    console.log("Good Afternoon");
}else {
    console.log("Good Evening");
}

//---------------------------------------------------

var level = 'two';
var title;
switch (level) {
       case 'one':
           title = "Level 1";
           break;
       case 'two':
           title = "Level 2";
           break;
       case 'three':
           title = "Level 3";
           break;
       default:
           title = "Out of range.";
           break;
}
console.log(title)


//---------------------------------------------------

var name = 'Edward';
switch (name) {
  case 'John':
    console.log(name + ' is a instructor.');
    break;
  case 'Walter':
  case 'James':
    console.log(name + ' is a mentor.');
    break;
  default:
    console.log('Sorry, i dont know ' + name+ '.');
}