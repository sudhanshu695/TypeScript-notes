// # UNIONS # 
// ---> unions are used to declare a type that can have one of several 'POSSIIBLE' Types.
//--->  (USE FULL WHEN WE WANT TO ALLOW A VARIBALE TO ACCEPT OR PARAMETER TO ACCEPT MULTIPLE TYPES) 
//--->  syntax ---> (|) use pipe
// --------------------#EXAMLE#------------------
let myVar; // for type
function fun(para) {
    //function body
}
// #------------------------------------------------------# 
let password;
password = "Sudhanshu ";
console.log(password);
password = 20;
console.log(password);
//----> As you can see now password can have either number data type or string data type 
function love(message) {
    console.log(message);
}
love("Aalu love you ");
love(124);
function Print(user1) {
    console.log(user1.userName, user1.userPassword);
}
;
const data1 = {
    userName: 'sudhanshu',
    userPassword: 1234,
};
const data2 = {
    userName: 'AAlU',
    userPassword: 1122,
};
Print(data2);
export {};
