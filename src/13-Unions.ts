                                 // # UNIONS # 

// ---> unions are used to declare a type that can have one of several 'POSSIIBLE' Types.

//--->  (USE FULL WHEN WE WANT TO ALLOW A VARIBALE TO ACCEPT OR PARAMETER TO ACCEPT MULTIPLE TYPES) 
//--->  syntax ---> (|) use pipe
// --------------------#EXAMLE#------------------


let myVar: number | string;   // for type


function fun(para: string | number ) {   // function
    //function body
}



// #------------------------------------------------------# 


let password : number | string;


password = "Sudhanshu "
console.log(password);


password = 20;
console.log(password);
 
//----> As you can see now password can have either number data type or string data type 

function love( message : string | number) {
    console.log(message);
}


love("Aalu love you ");
love(124);


// #---------------------------------------------# 


type UserInfo = {
   userName : string;
 userPassword : number | string;// here we have declare userPassword using "Union" so now userpassword can have string or number
};

function Print( user1 : UserInfo) {
         console.log(user1.userName, user1.userPassword);
};

const data1 : UserInfo = {
    
    userName : 'sudhanshu',
    userPassword : 1234,
};

const data2 : UserInfo = {
    
    userName : 'AAlU',
    userPassword : 1122,
};

Print(data2);