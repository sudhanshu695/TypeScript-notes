// *Important*
const Mypc = {
    name: "Asus",
    ram: 122,
    graphicCard: "RTX 4090",
};
console.log(Mypc.name);
console.log(Mypc.graphicCard);
console.log(Mypc.ram);
const E1 = {
    name: "Dark",
    contact: 1234567754
};
console.log(E1);
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
console.log(add(4, 5));
console.log(subtract(4, 5));
function greet(person) {
    console.log(`Hello, ${person.name} ${person.lastName}`);
    person.saySomething();
}
const jonny = {
    name: "John",
    lastName: "cena",
    age: 23,
    saySomething() {
        console.log(`Hey baddies `);
    }
};
const Modi = {
    name: "Narendera",
    lastName: "Modi",
    age: 73,
    saySomething() {
        console.log(`Hey Rahul gandhi `);
    }
};
greet(jonny);
greet(Modi);
const song1 = {
    title: "iris",
    singer: "The Goo Goo Dolls",
    available: true,
    printSong: (title, singer, available) => {
        return `Song : ${title} , singer : ${singer} , available ${available}`;
    },
};
console.log(song1.printSong(song1.title, song1.singer, song1.available));
// implements keyword used by a class to agree to the following structured
class Car {
    start() {
        console.log(" Car is starting");
    }
    stop() {
        console.log(" Car is stopping");
    }
}
const c1 = new Car;
c1.start();
c1.stop();
export {};
