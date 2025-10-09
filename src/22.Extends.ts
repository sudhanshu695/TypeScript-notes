// =======================#HOW TO extends THE INTERFACE===================== 


interface MovieDetails {
    name : string;
    price : number;
    rating : number;

    printMove(name : string ,price : number , rating : number) : string | number;
}

interface MovieGenra extends MovieDetails {
    genra : string;
}

const movie1 : MovieGenra = {
    name : "Conjuring 3",
    genra : "Horror",
    price : 100,
    rating : 8.8,

    printMove(
        name : string,
        price : number,
        rating : number
    ) : string | number {
        return `Movie name : ${name} Price: ${price}
        rating : ${rating}`;
    },
};


console.log(movie1.printMove(movie1.name,movie1.price,movie1.rating));


