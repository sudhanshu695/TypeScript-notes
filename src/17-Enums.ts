// #----------------ENUMS-----------------# 

// --> is a special TypeScript feature that lets you define a set of named constants — values that represent a group of related things.

// example 

enum Weather {
    Sunny = "sunny",
    Cloudy = 'cloudy',
    Raining = 'raining'
}

const currentWeather = Weather.Sunny;

console.log(currentWeather);


// ------------------Why not just use an object for that?----------

// object 

const Roles = {
  Admin: "ADMIN",
  User: "USER",
  Guest: "GUEST"
};

let role: string = Roles.Admin;
role = "abc"; // ✅ no error

// enum 

enum Roless {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}

let rolee: Roless = Roless.Admin;
// rolee = "random"; // ❌ Error — not allowed


// Enums are both types and values
