import { Livre } from "../models/livre";
import { Repository } from "./repository";

export class Library {
    livres: Repository<Livre>;

    constructor();
    constructor(livres: Repository<Livre>);

    constructor(livres?: Repository<Livre>) {
        this.livres = (livres)?livres: new Repository<Livre>();
    }
    
    ajouter(livre: Livre): void {
        this.livres.add(livre);
    }

    rechercherId(id: string): Livre | undefined {
        let livre: Livre | undefined;
        let T: Livre[] = this.livres.getAll();
        for(let i: number = 0; i < T.length; i++) {
            if(T[i].id == id) break;
        }
        return livre;
    }

    rechercherLivre(id: string): number {
        let i: number = 0;
        let T: Livre[] = this.livres.getAll();
        for(; i < T.length; i++) {
            if(T[i].id == id) break;
        }
        if(i == T.length) return -1;
        return i;
    }

    retirer(id: string): boolean {
        let i: number = 0;
        let T: Livre[] = this.livres.getAll();
        for(; i < T.length; i++) {
            if(T[i].id == id)
            {
                T.splice(i, 1);
                break;
            }
        }
        if(i == T.length) return false;
        return true;
    }

    emprunterLivre(id: string): boolean {
        let i: number = this.rechercherLivre(id);
        if(i == undefined) {
            throw new Error("le livre n'existe pas dans la bibliothèque!");
        }
        
        let livreTrouve: Livre = this.livres.getAll()[i];
        if(livreTrouve.available) {
            livreTrouve.available = false;
            return true;
        }
        return false;
    }

    rendreLivre(id: string): boolean {
        let i: number = this.rechercherLivre(id);
        if(i == undefined) {
            throw new Error("le livre n'existe pas dans la bibliothèque!");
        }
        
        if(i == -1) {
            throw new Error("le livre n'existe pas dans la bibliothèque!");
        }
        let livreTrouve: Livre = this.livres.getAll()[i];
        if(!livreTrouve.available) {
            livreTrouve.available = true;
            return true;
        }
        return false;
    }

    AfficherListeLivre(): void {
        console.log(this.livres.getAll());
    }
}