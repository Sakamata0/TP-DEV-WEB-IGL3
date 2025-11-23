import { Component, signal } from '@angular/core';
import { Welcome } from "./welcome/welcome";
import { Articles } from './articles/articles';
import { Produits } from "./produits/produits";

@Component({
  selector: 'app-root',
  imports: [Articles, Produits, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Partie1');
}
