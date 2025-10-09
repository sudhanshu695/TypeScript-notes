// Generic 
// A generic allows you to write a function (or class/interface) that can work with any data type — without losing type safety
// it is different from 'any' keyword any dont check what data type is , but generic does check
function identify1(value) {
    return value;
}
console.log(identify1("Hey"));
console.log(identify1(7));
// why not using "any" keyword
function identity2(value) {
    return value;
}
// let result = identity2("sudhanshu");
// result.toFixed(2); // ❌ This will crash (toFixed is only for numbers) and not even give error at compile time on the other hand using generic 
function identity3(value) {
    return value;
}
let result2 = identity3("sudhanshu");
// result.toFixed(2); ❌ TypeScript warns: string has no toFixed()
// result.toUpperCase(); ✅ Works fine
// =================================WITH TUPLE============================================= 
function uniqueData(v1, v2) {
    return [v1, v2];
}
const res = uniqueData(10, 20);
console.log(res);
const res2 = uniqueData("Hey ", "waittt!!!!!!!");
console.log(res2);
const cat1 = uniqueData({ name: "zuzu", age: 1 }, { name: "bella", age: 2 });
console.log(cat1);
// we are passing interface as a data type.
// ========================================================================================
function filterArray(array, condition) {
    return array.filter((item) => condition(item)); //function in js item loop throught each item
}
const numbers = [1, 2, 3, 4, 5];
const result = filterArray(numbers, (num) => num > 3);
console.log(result);
// now we are creating one array with the name of fruitArray and using Fruit as a data type which we have declared 
const fruitArray = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: " Watermelon", color: "Green" },
    { name: "Cherry", color: "Red" },
];
const redFruits = filterArray(fruitArray, (fruit) => fruit.color === "Red");
console.log(redFruits);
// ================================================================================================================ 
function reversePair(value1, value2) {
    return [value2, value1];
}
console.log(reversePair(2, "Apple"));
export {};
