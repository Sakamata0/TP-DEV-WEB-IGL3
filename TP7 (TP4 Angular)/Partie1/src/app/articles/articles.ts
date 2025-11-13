import { NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  titre: string;
  contenu: string;
  importance: string;
}

@Component({
  selector: 'app-articles',
  imports: [NgFor, FormsModule, NgClass],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})





export class Articles {
  articles: Article[] = [
    {
      titre: "L'IA dans le futur",
      contenu: "L'intelligence artificielle est au cœur des innovations modernes.",
      importance: 'élevée',
    },
    {
      titre: "L'écologie en Tunisie",
      contenu: "De nombreux projets verts voient le jour pour un avenir durable.",
      importance: 'moyenne',
    },
    {
      titre: "Les bienfaits du sport",
      contenu: "Le sport améliore la santé mentale et physique au quotidien.",
      importance: 'faible',
    },
  ];

  newTitre = '';
  newContenu = '';
  newImportance: 'élevée' | 'moyenne' | 'faible' = 'faible';

  ajouterArticle() {
    if (this.newTitre.trim() && this.newContenu.trim()) {
      this.articles.push({ 
        titre: this.newTitre,
        contenu: this.newContenu,
        importance: this.newImportance
      });
      this.newTitre = '';
      this.newContenu = '';
      this.newImportance = 'faible';
    }
  }
}
