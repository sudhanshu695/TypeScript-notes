// #----------------ENUMS-----------------# 
// --> is a special TypeScript feature that lets you define a set of named constants — values that represent a group of related things.
// example 
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Cloudy"] = "cloudy";
    Weather["Raining"] = "raining";
})(Weather || (Weather = {}));
const currentWeather = Weather.Sunny;
console.log(currentWeather);
// ------------------Why not just use an object for that?----------
// object 
const Roles = {
    Admin: "ADMIN",
    User: "USER",
    Guest: "GUEST"
};
let role = Roles.Admin;
role = "abc"; // ✅ no error
// enum 
var Roless;
(function (Roless) {
    Roless["Admin"] = "ADMIN";
    Roless["User"] = "USER";
    Roless["Guest"] = "GUEST";
})(Roless || (Roless = {}));
let rolee = Roless.Admin;
export {};
// rolee = "random"; // ❌ Error — not allowed
// Enums are both types and values
