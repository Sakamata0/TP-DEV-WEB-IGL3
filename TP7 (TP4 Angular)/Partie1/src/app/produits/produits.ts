import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';


interface Produit {
  nom: string;
  stock: number;
}

@Component({
  selector: 'app-produits',
  imports: [NgStyle, NgFor],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  produits: Produit[] = [
    { nom: 'Ordinateur', stock: 75 },
    { nom: 'Clavier', stock: 45 },
    { nom: 'Souris', stock: 10 }
  ];

  augmenterStock(produit: Produit) {
    produit.stock += 5;
  }

  diminuerStock(produit: Produit) {
    if(produit.stock >= 5) {
      produit.stock -= 5;
    }
    else if (produit.stock > 0) {
      produit.stock = 0;
    }
  }
}
