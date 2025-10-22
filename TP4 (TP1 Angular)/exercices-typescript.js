// 1. Déclaration de variables en utilisant différents types primitives
var nom = "Skander";
var age = 21;
var estEtudiant = true;
var note = 20;
// 2. Fonction typée pour calculer la somme de deux nombres
function addition(a, b) {
    return a + b;
}
console.log("Addition de 5 + 10 =", addition(5, 10));
// 4. Classe Etudiant qui implémente l'interface
var Etudiant = /** @class */ (function () {
    function Etudiant(id, nom, prenom, age) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    Etudiant.prototype.afficherInfos = function () {
        console.log("ID: ".concat(this.id, ", Nom: ").concat(this.nom, ", Pr\u00E9nom: ").concat(this.prenom, ", Age: ").concat(this.age));
    };
    return Etudiant;
}());
// Création d'un étudiant et affichage de ses infos
var etudiant1 = new Etudiant(1, "Boughnimi", "Skander", 21);
etudiant1.afficherInfos();
