import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Etudiant } from "./etudiant/etudiant";

@Component({
  selector: 'app-root',
  imports: [Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Partie2');
}
