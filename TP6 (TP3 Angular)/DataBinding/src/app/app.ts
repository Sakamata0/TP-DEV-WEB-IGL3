import { Component } from '@angular/core';
import { Bienvenue } from './bienvenue/bienvenue';
import { Produit } from './produit/produit';
import { Utilisateur } from './utilisateur/utilisateur';
import { Panier } from './panier/panier';

@Component({
  selector: 'app-root',
  imports: [Bienvenue, Produit, Utilisateur, Panier],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  panierItems: string[] = [];

  gererAjouterPanier(nomProduit: string): void {
    this.panierItems.push(nomProduit);
    console.log(`${nomProduit} ajouté au panier`);
  }
}
