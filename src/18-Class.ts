// #----------------Class-------- 

// class is like a template that define the structure and properties of an object will have 


class Person {
    name : string;
    age : number;

    
    constructor(name : string , age : number) {

        this.name = name;
        this.age = age;
    }


      greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};


const p1 =  new Person("sudhanshu" , 20);

p1.greet();