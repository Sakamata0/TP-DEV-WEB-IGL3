import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Score } from "../score/score";
import { Question } from "../question/question";

@Component({
  selector: 'app-game',
  templateUrl: './game.html',
  styleUrls: ['./game.css'],
  imports: [Score, Question, RouterModule]
})

export class Game {

  // état du jeu
  score = 0;
  bonnes = 0;
  mauvaises = 0;
  
  PLUS = 10;
  MINUS = 5;


  currentIndex = 0;
  durationPerQuestion = 15; // secondes

  questions = [
    {
      question: 'Quel est le PLUS grand océan du monde ?',
      options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'],
      reponse: 'Pacifique',
      type: 'text'
    },
    {
      question: "Quelle est la capitale de l'Algerie ?",
      options: ['Alger', 'Tunis', 'Tanja'],
      reponse: 'Alger',
      type: 'text'
    },
    {
      question: 'Quelle est la couleur du ciel ?',
      options: ['Bleu', 'Vert', 'Rouge'],
      reponse: 'Bleu',
      type: 'text'
    },
    {
      question: 'Quelle est la capitale de la Tunisie ?',
      options: ['Tunis', 'Sfax', 'Bizerte'],
      reponse: 'Tunis'
    },
    {
      question: 'Quelle est la monnaie officielle de la Tunisie ?',
      options: ['Dinar', 'Dirham', 'Euro'],
      reponse: 'Dinar'
    },
    {
      question: 'Quel est le plus grand stade de Tunisie ?',
      options: ['Stade de Radès', 'Stade Hamadi Agrebi', 'Stade de Sousse'],
      reponse: 'Stade Hamadi Agrebi'
    },
    {
      question: 'En quelle année la Tunisie a obtenu son indépendance ?',
      options: ['1956', '1962', '1945'],
      reponse: '1956'
    },
    {
      question: 'La révolution tunisienne a commencé en quelle année ?',
      options: ['2011', '2008', '2013'],
      reponse: '2011'
    },
    {
      question: 'Quel est le plus grand gouvernorat de Tunisie en superficie ?',
      options: ['Tataouine', 'Kébili', 'Tozeur'],
      reponse: 'Tataouine'
    },
    {
      question: 'Quelle ville est connue sous le nom de "Perle du Sahel" ?',
      options: ['Sousse', 'Monastir', 'Mahdia'],
      reponse: 'Sousse'
    },
    {
      question: 'Quel plat tunisien est connu comme très épicé ?',
      options: ['Lablabi', 'Ojja', 'Couscous au poisson'],
      reponse: 'Ojja'
    },
    {
      question: 'Quel club tunisien a remporté le plus de Ligue des Champions CAF ?',
      options: ['Espérance de Tunis :)', 'Club Africain', 'Étoile du Sahel'],
      reponse: 'Espérance de Tunis :)'
    },
    {
      question: 'Kairouan est célèbre pour…',
      options: ['La Grande Mosquée', 'Les oasis', 'Les plages'],
      reponse: 'La Grande Mosquée'
    },
    {
      question: 'Quel plat tunisien est connu pour être mangé au petit déjeuner ?',
      options: ['Lablabi', 'Kafteji', 'Makroudh'],
      reponse: 'Lablabi'
    }
  ];

  constructor(private router: Router) {}

  onSelectOption(option: string, question: any) {
    
    const index = this.currentIndex;
    
    if (option === question.reponse) {
      this.incrementScore();
      this.bonnes++;
    } else {
      this.decrementScore();
      this.mauvaises++;
    }

    setTimeout(() => this.nextQuestion(), 300);
  }

  incrementScore() {
    this.score += this.PLUS;
  }

  decrementScore() {
    if(this.score < this.MINUS) {
      this.score = 0
    }
    else {
      this.score -= this.MINUS;
    }
  }

  onTimeout(question: any) {
    // compter comme mauvaise réponse
    this.decrementScore();
    this.mauvaises++;
    setTimeout(() => this.nextQuestion(), 300);
  }

  nextQuestion() {
    if (this.currentIndex < this.questions.length - 1) {
      this.currentIndex++;
    } else {
      // fin du quiz -> naviguer vers la page de résultat
      this.router.navigate(['/result'], {
        state: {
          score: this.score,
          bonnes: this.bonnes,
          mauvaises: this.mauvaises,
          total: this.questions.length
        }
      });
    }
  }

  restart() {
    window.location.reload();
  }

  get progressPercent(): number {
    return Math.round(((this.currentIndex) / this.questions.length) * 100);
  }
}