//Declaration-merging 
const c1 = {
    brand: "BMW",
    model: "M4 Compition",
    start() {
        console.log(" STARTING BEAST ");
    },
    stop() {
        console.log(" Fuel me guys");
    }
};
console.log(c1.brand, c1.model);
c1.start();
c1.stop();
export {};
