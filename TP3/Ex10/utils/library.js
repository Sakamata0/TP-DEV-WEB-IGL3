"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
var repository_1 = require("./repository");
var Library = /** @class */ (function () {
    function Library(livres) {
        this.livres = (livres) ? livres : new repository_1.Repository();
    }
    Library.prototype.ajouter = function (livre) {
        this.livres.add(livre);
    };
    Library.prototype.rechercherId = function (id) {
        var livre;
        var T = this.livres.getAll();
        for (var i = 0; i < T.length; i++) {
            if (T[i].id == id)
                break;
        }
        return livre;
    };
    Library.prototype.rechercherLivre = function (id) {
        var i = 0;
        var T = this.livres.getAll();
        for (; i < T.length; i++) {
            if (T[i].id == id)
                break;
        }
        if (i == T.length)
            return -1;
        return i;
    };
    Library.prototype.retirer = function (id) {
        var i = 0;
        var T = this.livres.getAll();
        for (; i < T.length; i++) {
            if (T[i].id == id) {
                T.splice(i, 1);
                break;
            }
        }
        if (i == T.length)
            return false;
        return true;
    };
    Library.prototype.emprunterLivre = function (id) {
        var i = this.rechercherLivre(id);
        if (i == undefined) {
            throw new Error("le livre n'existe pas dans la bibliothèque!");
        }
        var livreTrouve = this.livres.getAll()[i];
        if (livreTrouve.available) {
            livreTrouve.available = false;
            return true;
        }
        return false;
    };
    Library.prototype.rendreLivre = function (id) {
        var i = this.rechercherLivre(id);
        if (i == undefined) {
            throw new Error("le livre n'existe pas dans la bibliothèque!");
        }
        if (i == -1) {
            throw new Error("le livre n'existe pas dans la bibliothèque!");
        }
        var livreTrouve = this.livres.getAll()[i];
        if (!livreTrouve.available) {
            livreTrouve.available = true;
            return true;
        }
        return false;
    };
    Library.prototype.AfficherListeLivre = function () {
        console.log(this.livres.getAll());
    };
    return Library;
}());
exports.Library = Library;
