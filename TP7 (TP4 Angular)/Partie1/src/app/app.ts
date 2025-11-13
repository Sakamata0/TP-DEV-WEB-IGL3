import { Component, signal } from '@angular/core';
import { Message } from "./message/message";
import { Articles } from './articles/articles';
import { Produits } from "./produits/produits";

@Component({
  selector: 'app-root',
  imports: [Message, Articles, Produits],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Partie1');
}
