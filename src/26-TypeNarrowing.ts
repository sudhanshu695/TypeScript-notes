//Type Narrowing//

// type narrowing(refine) => is the process of refining a variable's type within a conditional block of code. this allow you to write more precise and type - safe code

// means type narrowing help the function to know what kind of element we are passing just by little clue 
// Basically — if a variable could be many types (a union type), TS will “narrow” it down when it finds clues in your code

// TypeScript is reducing the possible types a variable can have — from many to fewer, based on some condition or logic





// #Type Guard# -> mechinism that help ts understand and narrow down the types more precisely like (typeof )

//Example 


function example( v : string | number ) : void { // here we are using union like the parameter can be string | number we dont know
        
    if(typeof v === "string" ) { // now this if-else condition is narrowingg it down (refine) like the para can be this or that
        console.log(v.toUpperCase()); // so we are using "typeof" (type guard).it’s also helping TypeScript refine (narrow) 
                                   // your variable’s type during static checking
    }
    else {                    
        console.log(v.toFixed(2)); // what will happen if we dont use typeof ?? then we are able to use toUppercase or tofixed
    }
}

example("heys");