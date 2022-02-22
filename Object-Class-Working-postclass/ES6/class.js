// syntactic sugar 

// class Employee {
//     constructor(name,age,salary) {
//         this.name = name;
//         this.age = age;
//         this.salary = salary;
//     }
//     showInfo() {
//         console.log("isim: " + this.name + " yaş: " + this.age + " maaş: " + this.salary);
//     }  // bu kullanım ES6'dan önceki Employee.prototype.showInfo kullanımı ile aynı.
// }

// Statik metodlar..
//statik metodlarda obje oluşturmadan içerideki metodları kullanabiliriz.

// class Matematik {
//     cube(x) {
//         console.log(x * x * x);
//     }
// };
//  const mat = new Matematik();
//  mat.cube(3);
///++++++++++++++++++++++++++++
//  class Matematik {
//     static cube(x) {
//         console.log(x * x * x);
//     }
// };
// Matematik.cube(4)  //burada object ataması  yapmadan class üzerinden metodu çağırabiliyoruz.


 ///İNHERİTANCE -Kalıtım

 class Person {
     constructor(name,age) {
        this.name = name;
        this.age = age;
     }
     showInfo() {
        console.log("isim: " + this.name + " yaş: " + this.age);
     }
 }

//aşağıda katılım özelliği kullanılıyor.
 class Employee extends Person {
     constructor(name,age,salary) {
         super(name,age);
         this.salary = salary;
     }
 };

 const emp = new Employee("Mustafa",29,5000);

 console.log(emp);
 emp.showInfo();