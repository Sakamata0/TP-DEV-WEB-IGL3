// 1)
function add(a, b) {
    return a + b;
}
;
console.log("addition: ", add(2, 3));
// 2)
function greet(name, age) {
    if (age == undefined)
        console.log("Bonjour ", name, "!");
    else
        console.log("Bonjour ", name, ", vous avez ", age, " ans.");
}
// Test
greet("skander");
greet("skander", 21);
// 3)
function power(base, exp) {
    if (exp === void 0) { exp = 2; }
    // Fonction puissance (exp peut être positif ou négatif)
    var p = 1;
    var inv = false;
    if (exp < 0) {
        exp = -exp;
        inv = true;
    }
    for (var i = 0; i < exp; i++)
        p *= base;
    if (inv)
        return 1 / p;
    return p;
}
// Test
console.log(power(5));
console.log(power(5, 3));
console.log(power(5, 0));
console.log(power(5, -1));
function combine(a, b) {
    if (typeof a == "string" && typeof b == "string")
        return a + b;
    if (typeof a == "number" && typeof b == "number")
        return a + b;
    throw new Error("les parametres doit etre soit 2 nombres ou 2 chaines de characteres");
}
;
console.log(combine("skander ", "boughnimi"));
console.log(combine(2, 3));
console.log(combine("skander ", 5));