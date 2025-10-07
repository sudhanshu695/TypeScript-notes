//Declaration-merging 

// After declaring an interface, it cannot be directly modified or change, here it comes declaration merging 
// declaration merging help us to modify and make some changes in existing interface-


interface car {
    brand : string;
    start() : void;
}

//using declaration merge 

interface car {
    model : string;
    stop() : void;
}


const c1 : car = {
    brand : "BMW",
    model : "M4 Compition",
    start() : void {
        console.log(" STARTING BEAST ");
    },

    stop() : void {
        console.log(" Fuel me guys");
    }
}

console.log(c1.brand , c1.model);

c1.start();
c1.stop();
