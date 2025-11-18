import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';
import { NgIf, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  imports: [NgIf, FormsModule, NgForOf],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList {
  @Input() livres: Book[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<Book>();

  pageSize = 5;
  currentPage = 1;

  get paginatedLivres() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.livres.slice(start, end);
  }

  get totalPages() {
    return Math.ceil(this.livres.length / this.pageSize);
  }

  goToPage(page: number) {
    if (page < 1) page = 1;
    if (page > this.totalPages) page = this.totalPages;
    
    this.currentPage = page;
  }

  validatePageInput() {
    if (!this.currentPage || this.currentPage < 1) {
      this.currentPage = 1;
    }
    else if (this.currentPage > this.totalPages) {
      this.currentPage = this.totalPages;
    }
    this.goToPage(this.currentPage);
  }
}
