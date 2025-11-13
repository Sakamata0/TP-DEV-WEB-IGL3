import { Component, signal } from '@angular/core';
import { EtudiantForm } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  imports: [EtudiantForm],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: []
})
export class App {
  protected readonly title = signal('TP');
}
