// ACCESS MODIFIERSS

// --> use access modifiers to control the visiblities of class members and properties 

// 1) public  --> can be access everywhere outside and in
// 2) private  --> can be accessable within the class
// 3) protected --> within the class and other subclass that are extend the class






class person {
 public   name : string;
  private  age : number;

  constructor( name:string , age:number ) {
         this.name = name;
         this.age = age;
  }
}

const p1 = new person("rick" , 24);
console.log(p1.name); //work fine
// console.log(p1.age) // wont work 