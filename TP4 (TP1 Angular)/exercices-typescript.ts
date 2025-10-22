// --------------------------------------------
// Partie 4:  Révision des bases de TypeScript
// --------------------------------------------

// 1. Déclaration de variables en utilisant différents types primitives
let nom: string = "Skander";
let age: number = 21;
let estEtudiant: boolean = true;
let note: number = 20;

// 2. Fonction typée pour calculer la somme de deux nombres
function addition(a: number, b: number): number {
    return a + b;
}

console.log("Addition de 5 + 10 =", addition(5, 10));

// 3. Interface Etudiant
interface IntEtudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

// 4. Classe Etudiant qui implémente l'interface
class Etudiant implements IntEtudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;

    constructor(id: number, nom: string, prenom: string, age: number) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    afficherInfos(): void {
        console.log(`ID: ${this.id}, Nom: ${this.nom}, Prénom: ${this.prenom}, Age: ${this.age}`);
    }
}

// Création d'un étudiant et affichage de ses infos
let etudiant1 = new Etudiant(1, "Boughnimi", "Skander", 21);
etudiant1.afficherInfos();


// ----------------------------
// Partie 5 : Concepts avancés
// ----------------------------

// 1)
function creerTableau<T>(valeurs: T[]): T[] {
    return [...valeurs]; // return une copie de valeurs
}


// Exemples d'utilisation
const nombres = creerTableau<number>([1, 2, 3, 4]);
const mots = creerTableau<string>(["TypeScript", "JavaScript", "Node"]);

console.log("Tableau de nombres :", nombres);
console.log("Tableau de mots :", mots);

// 2)
function afficherMessage(input: string | number, suffixe?: string): void {
    let message = `Message: ${input}`;
    if (suffixe) {
        message += ` ${suffixe}`; // ajout du suffixe si défini
    }
    console.log(message);
}

// Appels de la fonction
afficherMessage("Bonjour");
afficherMessage(42, "unités");

// 3)
enum Niveau {
    Debutant = 1,
    Intermediaire = 2,
    Avance = 3
}

// Exemple d'utilisation
let monNiveau: Niveau = Niveau.Intermediaire;

console.log("Mon niveau est :", Niveau[monNiveau]);