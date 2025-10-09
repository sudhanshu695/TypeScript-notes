// Creating object by using type to make it short 

type UserInfo = {      // using "type" --> way to create a new name for an existing type. 
    name : string | number, //using "union"  --> this or that 
    password : any,         // using "any" --> any kind of type
}

type Mystring = string; 

type userAccount = {
    userId : Mystring  
}

type FullInfo = UserInfo & userAccount;

function show( u1 : FullInfo) {
    console.log(`${u1.name},${u1.userId},${u1.password}`)
}


const user1 : FullInfo = {
     name : "SUDHANSHU SHARMA",
     password : 123,
     userId : "iblameegwad"
}

show(user1);


const items : (number | string ) [] = [1,2,3,"yeyeye"];

console.log(items[3]);
