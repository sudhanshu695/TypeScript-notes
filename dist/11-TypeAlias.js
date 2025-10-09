// # Type aliases ? #
let name = "Sudhanshu";
console.log(name);
function PrintMan(uncle) {
    console.log(`${uncle.name} , ${uncle.age}`);
}
const myUncle = {
    name: 'Dave',
    age: 43
};
PrintMan(myUncle);
function show(dad) {
    console.log(`Father Name : ${dad.name} , Father Age : ${dad.age} `);
}
const john = {
    name: 'john wick',
    age: 34
};
console.log(john);
export {};
