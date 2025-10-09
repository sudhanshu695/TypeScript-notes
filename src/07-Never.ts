// Never Keyword

// Never used to indicate that 'it should never Happen' 

// --> NEVER KEYWORD IS USED TO INDICATE THAT A FUNCTION WILL NOT RETURN ANYTHING 
// --> IT IS USED TO THROW ERROR AT COMPILE TIME 
//--> IT CAN NEVER RETURN ANY VALUE


// #1 A FUNCTION THAT ALWAYS THROW ERROR 
function throwError(name: string) : never {
          throw new Error(name);
}



// #2 A FUNCTION THAT HAS AN INFINITE LOOP

function infiniteLoop() :  never {
    while(true) {}
}


// #3 A FUNCTION THAT CAN NEVER HAVE A VALUE

let x:never;
function neverReturns(): never {
    while (true) {}
}

x = neverReturns();