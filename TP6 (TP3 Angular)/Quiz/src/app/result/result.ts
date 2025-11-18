import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.html',
  styleUrls: ['./result.css']
})
export class Result {

  score = 0;
  bonnes = 0;
  mauvaises = 0;
  total = 0;

  constructor(private router: Router) {
    const state: any = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.score = state.score ?? 0;
      this.bonnes = state.bonnes ?? 0;
      this.mauvaises = state.mauvaises ?? 0;
      this.total = state.total ?? 0;
    }
  }

  restart() {
    this.router.navigate(['/game']);
  }

  home() {
    this.router.navigate(['/home']);
  }
}
