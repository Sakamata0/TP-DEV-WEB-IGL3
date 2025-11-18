import { Component } from '@angular/core';
import { Book } from '../book';
import { BookList } from "../book-list/book-list";
import { BookForm } from "../book-form/book-form";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-container',
  imports: [BookForm, FormsModule, BookList],
  templateUrl: './book-container.html',
  styleUrl: './book-container.css',
})
export class BookContainer {
  livres: Book[] = [
    {
      id: 1,
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      publisherEmail: 'editions@example.com',
      publisherPhone: '12345678',
      releaseDate: '1943-04-06',
      category: 'Roman',
      isAvailable: true,
      stock: 5
    },
    {
      id: 2,
      title: "Introduction à l'Informatique",
      author: 'A. Auteur',
      publisherEmail: 'info@example.com',
      publisherPhone: '98765432',
      releaseDate: '2010-09-01',
      category: 'Informatique',
      isAvailable: false,
      stock: 0
    },
    {
      id: 3,
      title: 'L’Étranger',
      author: 'Albert Camus',
      publisherEmail: 'gallimard@example.com',
      publisherPhone: '55667788',
      releaseDate: '1942-05-01',
      category: 'Roman',
      isAvailable: true,
      stock: 8
    },
    {
      id: 4,
      title: 'Programmation en Java',
      author: 'Jean Dupont',
      publisherEmail: 'techbooks@example.com',
      publisherPhone: '66778899',
      releaseDate: '2018-02-15',
      category: 'Informatique',
      isAvailable: true,
      stock: 12
    }
  ];

  categories: string[] = [
    'Roman',
    'Science',
    'Histoire',
    'Informatique',
    'Art',
    'Autres'
  ]
  
  livrePourModifie: Book | null = null;
  searchText = '';
  sortBy: 'category' | 'availability' | '' = '';
  
  private nextId(): number {
    let maxId = 0
    for(let i = 0; i < this.livres.length; i++) {
      maxId = Math.max(maxId, this.livres[i].id)
    }
    return this.livres.length ? maxId + 1 : 1;
  }

  onAddBook(book: Book) {
    book.id = this.nextId();
    this.livres = [...this.livres, { ...book }];
  }

  onDeleteBook(id: number) {
    this.livres = this.livres.filter(b => b.id !== id);
    if (this.livrePourModifie?.id === id) this.livrePourModifie = null;
  }

  onEditRequested(book: Book) {
    this.livrePourModifie = { ...book };
  }

  onUpdateBook(updated: Book) {
    for(let i = 0; i < this.livres.length; i++)
    {
      if(this.livres[i].id == updated.id) {
        this.livres[i] = {...updated};
      }
    }
    this.livrePourModifie = null;
  }

  cancelEdit() {
    this.livrePourModifie = null;
  }

  get livresFiltres(): Book[] {
    
    let list = this.livres.filter(b =>
      b.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      b.author.toLowerCase().includes(this.searchText.toLowerCase())
    );
    if (this.sortBy === 'category') {
      list = list.slice().sort((a,b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'availability') {
      list = list.slice().sort((a,b) => Number(b.isAvailable) - Number(a.isAvailable));
    }
    return list;
  }

  countTotal() {
    return this.livres.length;
  }
}
