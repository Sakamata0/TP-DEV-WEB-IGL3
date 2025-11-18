import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookContainer } from "./book-container/book-container";

@Component({
  selector: 'app-root',
  imports: [BookContainer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp-books');
}
