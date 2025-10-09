//Classes using Generic 

class Box<T> {     
    private content : T;


    constructor(initialValue : T) {
        this.content = initialValue;
    }

    getContent(): T {
        return this.content;
    }

    setContent( newValue : T) : void {
        this.content = newValue;
    }
}


const b1 = new Box(2); 
console.log(b1);

b1.setContent(7);
console.log(b1.getContent());