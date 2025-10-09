//Classes using Generic 
class Box {
    constructor(initialValue) {
        this.content = initialValue;
    }
    getContent() {
        return this.content;
    }
    setContent(newValue) {
        this.content = newValue;
    }
}
const b1 = new Box(2);
console.log(b1);
b1.setContent(7);
console.log(b1.getContent());
export {};
