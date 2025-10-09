// =======================#HOW TO extends THE INTERFACE===================== 
const movie1 = {
    name: "Conjuring 3",
    genra: "Horror",
    price: 100,
    rating: 8.8,
    printMove(name, price, rating) {
        return `Movie name : ${name} Price: ${price}
        rating : ${rating}`;
    },
};
console.log(movie1.printMove(movie1.name, movie1.price, movie1.rating));
export {};
