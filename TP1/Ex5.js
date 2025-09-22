// 1) Objet livre :
var livre = {
    titre: "Harry Poter",
    auteur: "Skander",
    annee: "1990"
};

// 2) méthode getInfo() :
livre.getInfo = () => {
    return "Titre: " + livre.titre + ", Auteur: " + livre.auteur + ", Année: " + livre.annee;
}

// Affichage :
console.log(livre.getInfo());