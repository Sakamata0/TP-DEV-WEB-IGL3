/*
    @Author : Iskander Boughnimi
    @Section: IGL3

*/

import { Library } from "./utils/library";
import { Livre } from "./models/livre";

const biblio = new Library();
var Livres = [
    new Livre("1", "1984", "George Orwell", 1949, true),
    new Livre("2", "Le Petit Prince", "Antoine de Saint-Exupéry", 1943, false),
    new Livre("3", "The Hobbit", "J.R.R. Tolkien", 1937, true)
]

Livres.forEach(livre => biblio.ajouter(livre))

// =======================
// Petit test :
// =======================

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

// Fin de programme :)