function Person(name, age, city){
    // deklarasi constructor ditandai dengan this
    this.name = name;
    this.age = age;
    this.city = city;

    // Consturctor Tidak Menggunakan Prototype
    // this.greet = function(){
    //    return `Hello, my name is ${this.name}`;
    // };

    //Constructor dengan Menggunakan Prototype

    Person.prototype.greet = function(){
        return `Hello, my name is ${this.name}`;
     };


}

// dan dipanggil didalam object menggunakan keyword new
let person1 = new Person("Alice", 25, "Jakarta");
let person2 = new Person("Bob", 30, "Bandung");

console.log(person1.greet());
console.log(person2);