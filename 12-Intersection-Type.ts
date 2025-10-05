// # WHAT IS INTERSECTION TYPE ?#

// ---> AN INTERSECTION TYPE IS A WAY TO COMBINE MULTIPLE TYPES INTO A SINGLE TYPE 
// THAT INCLUDES ALL THE PROPERTIES AND METHID OF REACH CONSITUENT TYPE.

// ===========example=========



type Person = {
    name : string,
    age : number
};

type Employe = {
    id : number,
    title : string
};


type PersonAndEmploye = Person & Employe;


function show(Both : PersonAndEmploye){
    console.log(`${Both.age} , ${Both.name} , ${Both.title} , ${Both.id}`)
}


const P1:PersonAndEmploye = {
    name : "Sudhanshu",
    age : 20,
    id : 1234,
    title : "Manager"
}

console.log(P1);