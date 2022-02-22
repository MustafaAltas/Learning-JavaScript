//PROTOTYPE

const object = new Object(); //yeni bir obje oluşturduk.
const object2 = new Object();

object.name = "Mustafa";
console.log(object);
console.log(object2);

// function Employee(name,age) {
//     this.name = name;
//     this.age = age;
//     this.showInfos = function() {
//         console.log("isim : " + this.name + " yaş: " + this.age);
//     };
    
// };

// const emp1 = new Employee("Mustafa", 29);

// console.log(emp1.showInfos());

// methodumuzu prototype içerisine yazarsak gereksiz yere belleği işgal etmiş olmayız daha avantajlı bir durum.

function Employee(name,age) {
    this.name = name;
    this.age = age;
}
Employee.prototype.showInfos = function() {
    console.log("isim : " + this.name + " yaş: " + this.age);
}
let emp1 = new Employee("Mustafa", 29);
let emp2 = new Employee("ahmet",12);
console.log(emp1);
emp1.showInfos()
emp2.showInfos();
