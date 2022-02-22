function Person(name,age) {
    this.name = name;
    this.age = age;
}


function Employee(name,age,salary) {
    // this.name = name;
    // this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}

const emp = new Employee("mustafa",26,2000);

console.log(emp);