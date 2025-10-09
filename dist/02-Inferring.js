// WHAT IS Inference ??
// --> inference means TypeScript can guess (infer) data type of varibale,function.. even without you explicity write
// an annotation
// #-----------------------------------------------------------------------------------------------#
// When we provide value to variable name typescript will automatically inferrn the type of variable depending on (value/data)
//Here when we hover pointer to tech you will get something like 
let tech = 3;
// let tech:number -----
// its because the value of tech is number 
//ERROR
// tech = 'gaurav'
console.log(tech);
console.log(typeof tech);
export {};
//This will throw an error in ts
// tech = "hey"
// #------------------------------------------------# 
// but if it were javascript we were able to run this 
// let me = 4;
// me = "sudhanshu";
// console.log(me);
