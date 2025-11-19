// src/app/book-container.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookFormComponent } from '../book-form/book-form';
import { BookListComponent } from '../book-list/book-list';
import { Book } from '../models/book';


@Component({
  selector: 'app-book-container',
  standalone: true,
  imports: [CommonModule, FormsModule, BookFormComponent, BookListComponent],
  template: `
  <div class="app-shell">
    <header class="header">
      <div class="stats">
        <div>Total livres: <strong>{{ books.length }}</strong></div>
        <div>Disponibles: <strong>{{ availableCount }}</strong></div>
      </div>
    </header>

    <section class="controls">
      <input type="text" placeholder="Rechercher par titre / auteur..." [(ngModel)]="q" class="search" />
      <select [(ngModel)]="sortBy" class="select">
        <option value="">— Trier —</option>
        <option value="category">Catégorie</option>
        <option value="available">Disponibilité</option>
      </select>
    </section>

    <main class="main-grid">
      <app-book-form
        [categories]="categories"
        [bookToEdit]="bookToEdit"
        (add)="handleAdd($event)"
        (update)="handleUpdate($event)">
      </app-book-form>

      <div class="right-col">
        <app-book-list
          [books]="filteredAndSorted"
          (edit)="startEdit($event)"
          (delete)="deleteBook($event)">
        </app-book-list>
      </div>
    </main>
  </div>
  `,
  styles: []
})
export class BookContainerComponent {
  categories = ['Roman', 'Science', 'Histoire', 'Informatique', 'Art', 'Autres'];

  books: Book[] = [
    { id: 1, title: 'Le Petit Prince', author: 'A. de Saint-Exupéry', publisherEmail: 'ed1@example.com', publisherPhone: '12345678', releaseDate: '1943-04-06', category: 'Roman', isAvailable: true, stock: 5 },
    { id: 2, title: 'Angular Essentials', author: 'Dev Guru', publisherEmail: 'dev@example.com', publisherPhone: '87654321', releaseDate: '2023-01-15', category: 'Informatique', isAvailable: true, stock: 3 },
    { id: 3, title: 'Histoire du Monde', author: 'Historien', publisherEmail: 'hist@example.com', publisherPhone: '22334455', releaseDate: '2000-05-10', category: 'Histoire', isAvailable: false, stock: 0 }
  ];

  q = '';
  sortBy = '';
  bookToEdit: Book | null = null;

  get filteredAndSorted(): Book[] {
    const qLower = this.q.trim().toLowerCase();
    let out = this.books.filter(b =>
      !qLower || b.title.toLowerCase().includes(qLower) || b.author.toLowerCase().includes(qLower)
    );

    if (this.sortBy === 'category') {
      out = out.slice().sort((a, b) => a.category.localeCompare(b.category));
    } else if (this.sortBy === 'available') {
      out = out.slice().sort((a, b) => Number(b.isAvailable) - Number(a.isAvailable));
    }
    return out;
  }

  get availableCount(): number {
    return this.books.filter(b => b.isAvailable).length;
}


  handleAdd(b: Book) {
    const nextId = this.books.length ? Math.max(...this.books.map(x => x.id)) + 1 : 1;
    b.id = nextId;
    this.books = [b, ...this.books];
    this.bookToEdit = null;
  }

  deleteBook(id: number) {
    this.books = this.books.filter(x => x.id !== id);
    if (this.bookToEdit && this.bookToEdit.id === id) this.bookToEdit = null;
  }

  startEdit(b: Book) {
    this.bookToEdit = { ...b };
  }

  handleUpdate(updated: Book) {
    this.books = this.books.map(b => b.id === updated.id ? { ...updated } : b);
    this.bookToEdit = null;
  }
}
