//ES&'dan önce
//Constructorlar ve Obje oluşturma
// fonksiyon adı büyük harfle başlaması lazım.


function Employee(name,age,salary) { //yapıcı--constructor fonksiyon yapıyoruz
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log(this);  // bunu yaptığımız zaman aşağıda emp1 ve emp2'yi görebiliyoruz.
    this.showInfos = function() {
        console.log(this.name,this.age,this.salary);
    }
}

const emp1 = new Employee("mustafa",29,4000);
const emp2 = new Employee("ahmet",29,5000);

emp1.showInfos();
emp2.showInfos();

