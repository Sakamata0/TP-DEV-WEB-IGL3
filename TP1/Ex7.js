const notes = [12, 5, 17, 9, 20];

// Calcul de moyenne
let moyenne = notes.reduce((a, b) => a + b, 0) / notes.length;

// Affichage
console.log(moyenne);