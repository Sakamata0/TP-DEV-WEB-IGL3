import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  @Input() score: number = 0;
  @Input() bonnes: number = 0;
  @Input() mauvaises: number = 0;
}
