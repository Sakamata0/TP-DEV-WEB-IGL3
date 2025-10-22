"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var library_1 = require("./utils/library");
var livre_1 = require("./models/livre");
var biblio = new library_1.Library();
var Livres = [
    new livre_1.Livre("1", "1984", "George Orwell", 1949, true),
    new livre_1.Livre("2", "Le Petit Prince", "Antoine de Saint-Exupéry", 1943, false),
    new livre_1.Livre("3", "The Hobbit", "J.R.R. Tolkien", 1937, true)
];
Livres.forEach(function (livre) { return biblio.ajouter(livre); });
// Avant changement de variable availabilty de livre 1
console.log("La liste des livres: ");
biblio.AfficherListeLivre();
// Après
if (biblio.emprunterLivre("1")) {
    console.log("La liste des livres: ");
    biblio.AfficherListeLivre();
}
// Avant retirer un livre
console.log("La liste des livres: ");
biblio.AfficherListeLivre();
// Après
if (biblio.retirer("1")) {
    console.log("La liste des livres: ");
    biblio.AfficherListeLivre();
}
