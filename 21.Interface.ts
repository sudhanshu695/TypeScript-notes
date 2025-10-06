// *Important*


//  # INTERFACE 




// Interface is used when an objects properties must have all the value we declare in the class

// interface are commonly used to define the structure of objects , but ts can also be used to describe the shape of functions and class


// ===================== #1======================

interface Pc {
    name : string;
    ram : number;
    graphicCard : string;
}

const Mypc : Pc  = {
    name : "Asus",
    ram : 122,
    graphicCard : "RTX 4090",
}

console.log(Mypc.name);
console.log(Mypc.graphicCard);
console.log(Mypc.ram);


// ============================================#2============================


interface Employe {
    name : string;
    contact : number;
    email ? : string;  // using ? so its optional

}

const E1 : Employe = {
    name : "Dark",
    contact : 1234567754
};

console.log(E1);


// ================================# 3 with function =========================

interface Maths {
    (n1 : number , n2 : number) : number;
}

const add : Maths = (a , b) => a + b; 
const subtract : Maths = ( a, b ) => a - b;

console.log(add( 4 , 5));
console.log(subtract( 4 , 5));


// ============================# 4 ===================

interface Person {
    name : string;
    lastName : string;
    age : number;
    saySomething() : void;
}


function greet(person : Person) {
    console.log(`Hello, ${person.name} ${person.lastName}`);
    person.saySomething();
}

const jonny : Person = {
      name : "John",
      lastName : "cena",
      age : 23,
      saySomething() {
        console.log(`Hey baddies `);
      }
}

const Modi : Person = {
      name : "Narendera",
      lastName : "Modi",
      age : 73,
      saySomething() {
        console.log(`Hey Rahul gandhi `);
      }
}

greet(jonny);
greet(Modi);


// ======================== # 5============================== 


interface Song {
    title : string;
    singer : string;
    available : boolean;
    printSong(title : string , singer : string , available : boolean) : string;
}

const song1 : Song = {
      title : "iris",
      singer : "The Goo Goo Dolls",
      available : true,
      printSong : (title , singer , available) => {
        return `Song : ${title} , singer : ${singer} , available ${available}`
      },
};
console.log(song1.printSong(song1.title, song1.singer, song1.available));

