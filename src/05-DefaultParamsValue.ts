// default parameter value is value automatically take by function if there is no parameter 



function greet(name:string= "Sudhanshu") {
    return "Hello , " + name;
}


const res = greet();

const res2 = greet("Gaurav");

console.log(res2);