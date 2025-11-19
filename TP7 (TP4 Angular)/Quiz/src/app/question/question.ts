import { NgClass, NgFor } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-question',
  imports: [NgFor, NgClass],
  templateUrl: './question.html',
  styleUrls: ['./question.css']
})
export class Question implements OnInit, OnDestroy {

  @Input() question: any;
  @Input() index: number = 0;
  @Input() duration: number = 12; // secondes

  @Output() selected = new EventEmitter<string>();
  @Output() timeoutEvent = new EventEmitter<void>();

  timeLeft!: number;
  private intervalId: any = null;
  locked = false;
  selectedOption: string | null = null;

  ngOnInit() {
    // initialiser le timer en initalisation de component
    this.resetTimer();
    this.startTimer();
  }

  ngOnChanges(changes: SimpleChanges) {
    // s'il ya une modification sur la question, on initialise le timer et fait un bloquage de question
    if (changes['question'] || changes['index']) {
      this.clearTimer();
      this.resetTimer();
      this.startTimer();
    }
  }

  ngOnDestroy() {
    this.clearTimer();
  }

  resetTimer() {
    this.timeLeft = Number(this.duration) || 12;
    this.locked = false;
  }

  startTimer() {
    this.clearTimer();
    this.intervalId = setInterval(() => {
      this.timeLeft--;
      if (this.timeLeft <= 0) {
        this.clearTimer();
        this.locked = true;
        // enoyver au père que le timer a terminé
        this.timeoutEvent.emit();
      }
    }, 1000);
  }

  clearTimer() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  choose(option: string) {
    if (this.locked) return;
    this.locked = true;           // pour faire un bloquage pour n'emmettre pas le signal une autre fois
    this.clearTimer();            // initialiser le timer
    this.selected.emit(option);   // envoyer au père l'option qu'il a séléctionné
  }

  getButtonClass(opt: string) {
    if (!this.locked || this.selectedOption === null) return '';

    if (opt === this.question.reponse && opt === this.selectedOption) {
      return 'correct-selected';
    }

    if (opt === this.selectedOption && opt !== this.question.reponse) {
      return 'wrong-selected';
    }

    return '';
  }
}
