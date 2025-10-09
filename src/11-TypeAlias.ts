// # Type aliases ? #

// -->  A type aliases is a way to create a new name for an existing type. 
// it allow you to define a custom Elements type
// and give it a more meaningful or descriptive name.


// for example --
// type Mystring = string;

// Here now Mystring containe string data type. So, Now we can use Mystring instead of string data type 



type Mystring = string;

let name : Mystring = "Sudhanshu";

console.log(name);

// <---------------------------------------------------------------------------------------------------------------->

// #2---------------->>

// We can also use type in our Objects , it make shorter so we dont have to write length code


type Man = {
    name : string;
    age : number;
};

function PrintMan ( uncle : Man ) {
    console.log(`${uncle.name} , ${uncle.age}`);
}

const myUncle : Man = {
    name : 'Dave',
    age : 43
};


PrintMan(myUncle);


// ===============================

type Father = {
   name : string,
   age? : Number // now age can be used or not up to us
};

function show( dad : Father) {
        console.log(`Father Name : ${dad.name} , Father Age : ${dad.age} `);
}


const john : Father = {
      
    name : 'john wick',
    age : 34
};

console.log(john);