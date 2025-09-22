const user = {name : "Noor", age : 10, city: "Tunis" };

// Affichage avant
console.log(user);

// Destruction du nom et d'age
delete user.name;
delete user.age;

// Affichage après
console.log(user);