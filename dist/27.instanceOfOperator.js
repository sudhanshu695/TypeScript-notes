// the instance of operator is another type guard in typescript that allow you to check whether an obj is an instance of a particular class or constructor fun 
// instanceof is another type narrowing operator just like typeof, but it’s used for objects and classes instead of primitive types. 
class Dog {
    bark() {
        console.log("Bawwwuwuwuw");
    }
}
class Cat {
    Meow() {
        console.log("Mewowoowowwueueeuwow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) { // When TypeScript sees if (animal instanceof Dog): It narrows the type from dog | cat → dog
        animal.bark();
    }
    else {
        animal.Meow();
    }
}
const D1 = new Dog;
const c1 = new Cat;
animalSound(D1);
animalSound(c1);
export {};
