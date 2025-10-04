// ARRAY ARE A TYPE OF OBJECTS THAT CAN STORE MULTIPLE VALUE WITH SAME DATA TYPE.  
// we have to declare what kind of data an array will hold like string, number,  boolean.
// we can access array value by index 


const age:number[] = [1,2,3,4]; 
console.log(age)  //--> Output [1,2,3,4]

console.log(age[0]); //--> output 1
 
age[0] = 10;
console.log(age[0]);  //--> output 10
age.push(5);
console.log(age)  //  --> [ 10, 2, 3, 4, 5 ]

