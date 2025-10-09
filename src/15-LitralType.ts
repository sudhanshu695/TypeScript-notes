// #-----------------LITERAL TYPE----------------# 

// ---> Allow you to specify a value that can only be one specific literal value 
// ---> means a variable with a literal type can only have one specific value and no ther


// ==================#1=======================

let name : "sudhanshu " | "Gaurav"; // now we cant reassign or change the value of name from sudhanshu or Gaurav to anything else

 name = "sudhanshu "  // this will work fine
console.log(name);   // sudhanshu


//  name = "heyy "   this will throw error 

// ====================#2 with type=======================

type UserPass = 'aalu@1155' | "gaurav&*)2";

let ShowPass : UserPass;
ShowPass = "aalu@1155";

console.log(ShowPass);


// ==========================#3 With other Different ====================


type Person = "Sudhanshu" | number ;

let Person1 : Person;
Person1 = "Sudhanshu"; // Works

Person1 = 23; // stills works 

// <========================================================================> 