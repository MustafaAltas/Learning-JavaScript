//create object metodu bir obje oluştururken prototype'ni başka bir objeden oluşturmamızı sağlıyor. 


//bir obje oluşturuyoruz.
const obj = {
    test1 : function () {
        console.log("Test 1...");
    },
    test2 :function() {
        console.log("Test 2 ....");
    }
}

console.log(obj);


// aşağıdaki işlemde oluşturulan objeye obj objesinin bütün metodları prototype içerisine gönderilmesi sağlandı
const emp = Object.create(obj);

console.log(emp);
emp.test1();


///***************************************** */

function Person() {

}

Person.prototype.test1 = function() {
    console.log("Test 1");
};

Person.prototype.test2 = function() {
    console.log("Test 2");
};
//++++++++
function Employee(name,age) {
    this.name = name;
    this.age = age;
};

//************************************** */

Employee.prototype = Object.create(Person.prototype);  // Employee constructor'ı Persone constructor'ından metod alıyor .
Employee.prototype.bilgi = function() {
    console.log("bilgi");
}

let emp2 = new Employee("Mustafa",29);
console.log(emp2);
emp2.bilgi();