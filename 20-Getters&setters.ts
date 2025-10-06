// # Getters and setters #

//--> Getters and setters is used to access and modifie the class properties 
// --> Setter function cant return a value
// --> Setter always can set one value at a time , but it can be anything object, array...

console.log("Example #1 ");


class Myclass {
    private _Year : number = 0;


      get myGetter() : number {
         return this._Year;
      }

      set mySet(value : number) {
        if( value < 0 ) {
           throw console.log("can give negative value");
        }

       this._Year = value;
      }
}


const y1 = new Myclass();
y1.mySet=10;
console.log(`Setting year through mySet := ${y1.myGetter}` , "\n")
console.log("Example #2 ");

// ===================== 2 Example==================

class Car {
    public name : string;
    private year : number;


    constructor(n : string , y : number ) {
        this.name = n;
        this.year = y;
    }

    get Mygetter() : number | string {
        if(this.year >  100) {
            return this.year;
        }
        else {
          return  this.name;
        }
    }

 }

 const c1 = new Car("BMV" , 2023);
 console.log( c1.Mygetter);
 c1.name = 'BMV';
 console.log( c1.name , "\n");
 console.log("Example #3 ");

//  ===================== #3  example with tuple----------------


class Bike {
    private bikeName:string = "";
    private bikeModel : number = 0;

       //use tuple
    set mySetter( value : [ string , number]) {
       [this.bikeName , this.bikeModel ] = value;
    }

    get Mygetter() {
        return ` ${this.bikeModel} , ${this.bikeName}`;
    }
 }


 const b1 = new Bike;
 b1.mySetter = ["Hero Xstream" , 2025];

 console.log(b1.Mygetter);


//  Setter = one value at a time
// But that “value” can be anything — object, tuple, array, etc.