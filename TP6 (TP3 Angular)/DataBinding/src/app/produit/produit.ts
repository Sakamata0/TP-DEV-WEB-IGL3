import { Component, Output, Input, EventEmitter } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-produit',
  imports: [NgClass, NgStyle],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})

export class Produit {
  imageURL: string = 'assets/laptop.jpg';
  @Input() nomProduit: string = 'Ordinateur Portable';
  enStock: boolean = true;

  toggleStock() {
    this.enStock = !this.enStock;
  }

  @Output() ajouterAuPanier = new EventEmitter<string>();

  ajouterProduit(): void {
    this.ajouterAuPanier.emit(this.nomProduit);
  }
}
