// #----------OBJECTS---------# 
// An objects in typescript is a "structured data type" that represents a
//  COLLECTION of properties of an objects can have specific type and the objects itself can be annotated with a type
// OBJECTS CAN BE A PERSON , CAR... 
// #----------STRUCTURE DATA TYPE--------# 
// Structure data type that combine MULTIPLE different data type in one UNIT 
// #1----
const car = {
    name: "Honda",
    model: 2023
};
console.log(`Car Name : ${car.name} \n Car Model : ${car.model} `);
// IF WE EVEN REMOVE ONE ATTRIBUTE PROPERTIE IT WILL GIVE US ERROR like (model:23)
// #error#
// const bike : { name:string , model:number } = {
//     name : "Honda",
// };
// #2------
function person() {
    return {
        myName: "Sudhanshu",
        age: 20
    };
}
;
const res = person();
console.log("using with function : ", res);
// #3 -----------SOMETIMES WE USE '?' WHERE ALL PROPERTIES are NOT IMPORTANT------# 
// like here model is not important its upto you , you want to declare or not 
let airplane = {
    brand: "emirates",
};
console.log("\n", "using ? keyword", airplane.brand);
// ##4---------READONLY PROPERTIE----## 
let teacher = {
    name: "John",
    uni: "oxfard",
    age: 45,
    subject: "Computer"
};
teacher.name = 'David';
// teacher.subject = 'Numericals'; 
// HERE WE CANT CHANGE THE VALUE OF SUBJECT BECAUSE WE HAVE USED READONLY keyword
console.log(teacher.name, teacher.subject);
export {};
