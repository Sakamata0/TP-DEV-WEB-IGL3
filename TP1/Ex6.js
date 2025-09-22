// 1) Classe Etudiant :
class Etudiant {
    constructor(nom, note) {
        this.nom = nom;
        this.note = note;
    }
    // 2) Méthode getMention() :
    getMention() {
        if(this.note < 10) return "Echec";
        else if(this.note < 14) return "Passable";
        else if(this.note < 16) return "Bien";
        else return "Très bien";
    }
}

// Création de 3 instances d'étudiants :
var e1 = new Etudiant("Skander", 9);
var e2 = new Etudiant("Amenallah", 12.5);
var e3 = new Etudiant("Aziz", 17.75);

// Affichage :
console.log(e1.getMention(), e2.getMention(), e3.getMention());