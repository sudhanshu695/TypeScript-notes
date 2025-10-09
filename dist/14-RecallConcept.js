// Creating object by using type to make it short 
function show(u1) {
    console.log(`${u1.name},${u1.userId},${u1.password}`);
}
const user1 = {
    name: "SUDHANSHU SHARMA",
    password: 123,
    userId: "iblameegwad"
};
show(user1);
const items = [1, 2, 3, "yeyeye"];
console.log(items[3]);
export {};
