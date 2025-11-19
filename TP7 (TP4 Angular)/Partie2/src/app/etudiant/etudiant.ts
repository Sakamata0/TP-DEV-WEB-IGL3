import { Component, OnInit } from '@angular/core';
import { Student, Students } from '../TypeStudent';
import { NgFor, UpperCasePipe, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  imports: [NgFor, UpperCasePipe, FormsModule, NgIf],
  templateUrl: './etudiant.html',
  styleUrl: './etudiant.css',
})
export class Etudiant implements OnInit{
  etuds!: Student[];
  selectedStudent!: Student; 
  ngOnInit(): void {
    this.etuds = Students;
  }

  onSelect(e: Student) {
    this.selectedStudent = e;
  }
}