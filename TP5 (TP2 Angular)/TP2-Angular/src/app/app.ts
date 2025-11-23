import { Component, signal } from '@angular/core';
import { Utilisateur } from './utilisateur/utilisateur';
import { Profil } from './profil/profil';
import { Adresse } from './adresse/adresse';

@Component({
  selector: 'app-root',
  imports: [Utilisateur, Profil, Adresse],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TP2-Angular');
}