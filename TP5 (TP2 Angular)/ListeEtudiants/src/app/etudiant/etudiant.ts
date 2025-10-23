import { Component } from '@angular/core';
import { Student } from './TypeStudent';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [FormsModule],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant {
  etudiant: Student = { 
    id: 1,
    name: 'John Doe',
    classe: 'IGL3'
  };
}
