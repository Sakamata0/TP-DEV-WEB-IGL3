import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Book } from '../book';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-book-form',
  imports: [FormsModule, NgIf],
  templateUrl: './book-form.html',
  styleUrl: './book-form.css',
})
export class BookForm {
  @Input() categories: string[] = [];
  @Input() livrePourModifie: Book | null = null;

  @Output() addBook = new EventEmitter<Book>();
  @Output() updateBook = new EventEmitter<Book>();
  @Output() cancelEdit = new EventEmitter<void>();

  model: Book = this.emptyModel();

  emptyModel(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      category: '',
      isAvailable: true,
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      stock: undefined
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['livrePourModifie'] && this.livrePourModifie) {
      this.model = { ...this.livrePourModifie };
    } else if (changes['livrePourModifie'] && this.livrePourModifie === null) {
      this.model = this.emptyModel();
    }
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(c => c.markAllAsDirty());
      return;
    }

    const year = this.model.releaseDate ? new Date(this.model.releaseDate).getFullYear() : 0;
    if (year <= 1900) {
      alert('La date de publication doit être après 1900.');
      return;
    }

    

    const book: Book = {
      id: this.model.id || 0, // parent générera id si besoin
      title: this.model.title.trim(),
      author: this.model.author.trim(),
      publisherEmail: this.model.publisherEmail.trim(),
      publisherPhone: this.model.publisherPhone,
      releaseDate: this.model.releaseDate,
      category: this.model.category,
      isAvailable: this.model.isAvailable,
      stock: this.model.stock ?? 0
    };

    if (this.livrePourModifie) {
      book.id = this.livrePourModifie.id;
      this.updateBook.emit(book);
    } else {
      this.addBook.emit(book);
    }

    form.resetForm(this.emptyModel());
    this.model = this.emptyModel();
  }

  onCancel(form: NgForm) {
    form.resetForm(this.emptyModel());
    this.model = this.emptyModel();
    this.cancelEdit.emit();
  }
}
