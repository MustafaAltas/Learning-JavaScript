const obj1 = {
    number1 : 10,
    number2 : 20
};
const obj2 = {
    number1 : 30,
    number2 : 40
};

function addNumbers(number3,number4) {
    console.log(this.number1 + this.number2+number3+number4);
};

// addNumbers.call(obj1,100,200);
// addNumbers.call(obj2,100,200);

// call ile apply arasında ki fark ==> apply metodunda [] içerisine yazılıyor .

// call ve apply bize fonksiyon üretmiyor ancak bind üretiyor 

// addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[100,200]);


//bind

function getNumberTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4
};

const copyfunc1 = getNumberTotal.bind(obj1);

console.log(copyfunc1(100,200)); // 330