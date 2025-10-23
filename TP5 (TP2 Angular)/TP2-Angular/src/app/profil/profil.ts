import { Component } from '@angular/core';
import { ProfilData } from './profileData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  imports: [FormsModule],
  templateUrl: './profil.html',
  styleUrl: './profil.css',
})

export class Profil {
  utilisateur: ProfilData = {
    prenom: 'Skander',
    age: 21
  };
}

