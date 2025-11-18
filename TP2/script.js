/*
    @Copyright:
        Author:  Iskander Boughnimi
        class:   IGL3 - 2025/2026
*/

// Variables globales
const Liste             = document.getElementById("liste");
const input             = document.getElementById("inputField");
const ajouterBtn        = document.getElementById("ajouterBtn");
const supprimerTousBtn  = document.getElementById("supp_tous");
const erreurField       = document.getElementById("erreur");
const filtreInput       = document.getElementById("filtre_input");
const statsTermines     = document.getElementById("termines");
const statsEncours      = document.getElementById("en_cours");

var ToDoList = [];
var tacheTermines = 0;

// Etape2: message de bienvenue
console.log("Bonjour, Console !");

// Class Tache
class Tache {
    constructor(index, texte, etat = "non-termine") {
        /*
            @index: indice de tâche dans localStorage
            @texte: la tâche en texte
            @etat:  etat de tâche ('non-termine' par défaut)
        */
        this.etat = etat;
        this.texte = texte;
        this.index = index;

        // Construction de l'élèment HTML
        const tache = document.createElement('li');

        // Zone de texte
        const textField = document.createElement("span");
        textField.classList.add("flex-grow");
        textField.textContent = this.texte;
        if(etat == "termine") textField.classList.add(etat);

        // Les boutons
        const deleteBtn = document.createElement('button');
        deleteBtn.className = "deleteBtn";
        deleteBtn.textContent = "✖";

        const completeBtn = document.createElement('button');
        completeBtn.className = "completeBtn";
        completeBtn.textContent = "✔";

        // Liaison des élèments
        const btnContainer = document.createElement('span');
        btnContainer.appendChild(deleteBtn);
        btnContainer.appendChild(completeBtn);

        tache.appendChild(textField);
        tache.appendChild(btnContainer);

        // Les fonctionnalités des boutons
        completeBtn.addEventListener('click', (e) => terminerTache(this));
        deleteBtn.addEventListener('click', (e) => {
            supprimerTache(deleteBtn.parentNode.parentNode);
        });

        this.htmlElement = tache;
    }

    // Fonction pour convertir l'object Tache en chaine de charactere
    toString() {
        return this.texte + "|" + this.etat;
    }

    // Fonction pour enregistrer la tâche dans localStorage
    saveUpdate() {
        window.localStorage.setItem("t_" + this.index, this.toString());
    }
}

// Fonction pour afficher la liste des tâches depuis le tab 'ToDoList'
function showList() {
    Liste.innerHTML = "";
    ToDoList.forEach(tache => {
        Liste.appendChild(tache.htmlElement);
    })

    // En cas ou il y a aucune tâche
    if(Liste.innerHTML == "") {
        Liste.innerHTML = "Aucune tâche à afficher !";
    }
    
    // Mise à jour des statistiques
    showStats();
}

// Fonction pour afficher les stats des tâches
function showStats() {
    statsTermines.textContent = tacheTermines;
    statsEncours.textContent = ToDoList.length - tacheTermines;
}

// Fonction lancé dès le lancement de l'application
function loadList() {
    // Initialiser 'index' dans localStorage
    if(window.localStorage.getItem("index") === null) {
        window.localStorage.setItem("index", "0");
    }

    for(let i = 0; i < window.localStorage.length; i++) {
        let key = window.localStorage.key(i);
        if(key != "index") {
            // Composer le contenue de localStorage dans des objets 'Tache'
            let content = window.localStorage.getItem(key);
            let texte = content.substring(0, content.lastIndexOf("|"));
            let etat = content.substring(content.lastIndexOf("|") + 1, content.length);

            // Mettre les derniers taches au début
            ToDoList.unshift(new Tache(key.substring(2, key.length), texte, etat));
        }
    }

    // Initialiser le compteur 'tacheTermines'
    for(let i = 0; i < ToDoList.length; i++) {
        if(ToDoList[i].etat == "termine") tacheTermines++;
    }

    // Faire un tri selection décroissant
    sortWithIndex(ToDoList);
    // Affichage de la liste des tâches
    showList();
}

// Fonction de tri selection décroissant
function sortWithIndex(T) {
    for(let i = 0; i < T.length - 1; i++) {
        let max = i;
        for(let j = i + 1; j < T.length; j++) {
            if(Number(T[j].index) > Number(T[max].index))
                max = j;
        }
        if(max != i) {
            let temp = T[max];
            T[max] = T[i];
            T[i] = temp;
        }
    }
}

// Fonction pour ajouter une tâche
function ajouterTache(text) {
    if(text.length) {
        // Création d'un objet Tache
        const tache = new Tache(window.localStorage.getItem("index"), text);
        // L'ajout de la tâche dans le tab 'ToDoList' et affichage de la liste
        ToDoList.unshift(tache);
        showList();
        
        // L'ajout de la tâche dans localStorage
        let index = window.localStorage.getItem("index");
        window.localStorage.setItem("t_" + index, tache.toString());
        // Mise à jour de l'indice future
        window.localStorage.setItem("index", String(Number(index) + 1));
        // Vider la zone erreur en cas de validation de l'Input
        erreurField.innerHTML = "";
    }
    else {
        // Cas de probleme d'Input: affichage d'un msg d'erreur
        erreurField.innerHTML = "Vous devez écrire quelque chose tous d'abord !";
    }

    // Vider les zones de saisies
    input.value = "";
    filtreInput.value = "";
};

// Fonction pour supprimer une tâche
function supprimerTache(element) {
    // Suppression d'element HTML de la page
    element.parentNode.removeChild(element);

    // Recherche de la tâche dans le tab 'ToDoList'
    for(let i = 0; i < ToDoList.length; i++) {
        if(ToDoList[i].htmlElement == element) {
            // Suppression de la tâche de localStorage
            window.localStorage.removeItem("t_"+ToDoList[i].index);
            // Decrémentation de compteur tacheTermines, si la tache a été terminé
            if(ToDoList[i].etat == "termine") tacheTermines--;
            // Suppression de la tâche du tab 'ToDoList'
            ToDoList.splice(i, 1);
            break;
        }
    }
    // Mise à jour des stats
    showStats();
}

// Fonction pour la suppression de la totalités des tâches
function supprimerTous() {
    window.localStorage.clear();
    window.localStorage.setItem("index", "0");
    ToDoList = [];
    tacheTermines = 0;
    // Afficher la liste vide
    showList();
}

// Fonction pour terminer une tâche
function terminerTache(tache) {
    var span = tache.htmlElement.querySelector("span");

    if(tache.etat == "non-termine") {
        span.classList.add(tache.etat = "termine");
        tacheTermines++;
    }
    else {
        span.classList.remove("termine");
        tache.etat = "non-termine";
        tacheTermines--;
    }

    // Enregistrement de changement dans localStorage
    tache.saveUpdate();
    // Affichage de changement des stats
    showStats();
}

// Fonction pour filtrer la liste selon le texte
function filtre() {
    // Extraction du texte de la zone de saisie
    let filtreTexte =  filtreInput.value.trim().toLowerCase();

    // La recherche des tâches contenant le contenu du 'filtreTexte'
    Liste.innerHTML = "";
    ToDoList.forEach(tache => {
        if(tache.texte.toLowerCase().includes(filtreTexte)) {
            Liste.appendChild(tache.htmlElement);
        }
    })

    // Affichage d'un message en cas ou il n y a pas de résultat
    if(Liste.innerHTML == "") {
        Liste.innerHTML = "Aucune résultat !";
    }
    
}

// Les événements
ajouterBtn.addEventListener("click", (e) => ajouterTache(input.value.trim()));
document.addEventListener('keyup', (e)=>{
    if(e.key == "Enter") {
        ajouterTache(input.value.trim());
    }
});
window.addEventListener("load", loadList);
filtreInput.addEventListener("input", filtre);
supprimerTousBtn.addEventListener("click", supprimerTous);

// Fin du fichier 'script.js'