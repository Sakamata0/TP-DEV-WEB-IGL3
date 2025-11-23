let T1 = [1, 2, 3];
let T2 = [4, 5, 6];

// Concaténation des tableaux T1 et T2
let T3 = [...T1, ...T2];

var obj = {
    name: "Skander",
    age: 21,
    Fac: "FST"
}

// La copie de 'obj'
var obj_copy = {...obj};

obj_copy.name = "Mohamed";

// Affichage
console.log(obj, obj_copy);