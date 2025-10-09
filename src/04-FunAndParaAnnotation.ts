// #--------------------------FUNCTION ANNOTATION-------------------------#

// REGULAR FUN 




function greet(name: string): string {
  return "Hello, " + name;
}

// (greet) is variableName ,  

// (name: string) is Parameter Annotation 

// (:string) is return type 

// (name: string) THIS IS IMPORTANT, HERE WE THE PARAMETER WILL ONLY ACCEPT THE STRING DATA TYPE IF WE TRY TO 
// PASS SOME DIFFERENT DATA TYPE IT WILL THROW an ERROR 




// ARROW FUN 
const greeting = (name : string) => "hello " + name;
const res = greeting("Sudhanshu");

console.log(res);




// *WE CAN NOT PASS MORE OR LESS ARGUMENT THEN YOU SPECIFY IN YOUR PARAMETER*