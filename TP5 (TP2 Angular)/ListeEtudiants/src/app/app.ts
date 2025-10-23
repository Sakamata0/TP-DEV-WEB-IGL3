import { Component, signal } from '@angular/core';
import { Etudiant } from './etudiant/etudiant';

@Component({
  selector: 'app-root',
  imports: [Etudiant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "MyClass Will be Angular Heroes";
}
