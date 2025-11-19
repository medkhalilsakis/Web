import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="card list-card">
    <h3>Catalogue</h3>
    <table class="books-table" *ngIf="books && books.length; else empty">
      <thead>
        <tr>
          <th>Titre</th>
          <th>Auteur</th>
          <th>Catégorie</th>
          <th>Disponible</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let book of books; trackBy: trackById">
          <td>{{ book.title }}</td>
          <td>{{ book.author }}</td>
          <td>{{ book.category }}</td>
          <td>
            <span class="badge" [class.available]="book.isAvailable" [class.unavailable]="!book.isAvailable">
              {{ book.isAvailable ? 'Oui' : 'Non' }}
            </span>
          </td>
          <td>{{ book.stock ?? '—' }}</td>
          <td>
            <button class="btn small" (click)="onEdit(book)" title="Modifier">✏️</button>
            <button class="btn small danger" (click)="onDelete(book.id)" title="Supprimer">🗑️</button>
          </td>
        </tr>
      </tbody>
    </table>

    <ng-template #empty>
      <div class="empty">Aucun livre à afficher.</div>
    </ng-template>
  </div>
  `,
  styles: []
})
export class BookListComponent {
  @Input() books: Book[] = [];
  @Output() edit = new EventEmitter<Book>();
  @Output() delete = new EventEmitter<number>();

  onEdit(b: Book) { this.edit.emit(b); }
  onDelete(id: number) { this.delete.emit(id); }

  trackById(index: number, item: Book) {
    return item.id;
  }
}
