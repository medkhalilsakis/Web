import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="card form-card">
    <h3>{{ editing ? 'Modifier un livre' : 'Ajouter un livre' }}</h3>

    <form #bookForm="ngForm" (ngSubmit)="onSubmit(bookForm)" novalidate>
      <div class="form-row">
        <label for="title">Titre</label>
        <input id="title" name="title" type="text"
          [(ngModel)]="model.title" #title="ngModel"
          required minlength="3"
          (ngModelChange)="onTitleChange($event)"
          class="form-input" />
        <div class="error" *ngIf="(title.invalid && (title.dirty || title.touched)) || titleDigitsOnly">
          <small *ngIf="title.errors?.['required']">Le titre est requis.</small>
          <small *ngIf="title.errors?.['minlength']">Min 3 caractères.</small>
          <small *ngIf="titleDigitsOnly">Le titre ne peut être composé uniquement de chiffres.</small>
        </div>

      </div>

      <div class="form-row">
        <label for="author">Auteur</label>
        <input id="author" name="author" type="text"
          [(ngModel)]="model.author" #author="ngModel"
          required minlength="3" class="form-input" />
        <div class="error"
     *ngIf="author.invalid && (author.dirty || author.touched)">
  <small *ngIf="author.errors?.['required']">L'auteur est requis.</small>
  <small *ngIf="author.errors?.['minlength']">Min 3 caractères.</small>
</div>

      </div>

      <div class="form-row">
        <label for="publisherEmail">Email éditeur</label>
        <input id="publisherEmail" name="publisherEmail" type="email"
          [(ngModel)]="model.publisherEmail" #publisherEmail="ngModel"
          required email class="form-input" />
        <div class="error"
     *ngIf="publisherEmail.invalid && (publisherEmail.dirty || publisherEmail.touched)">
  <small *ngIf="publisherEmail.errors?.['required']">Email requis.</small>
  <small *ngIf="publisherEmail.errors?.['email']">Email invalide.</small>
</div>

      </div>

      <div class="form-row">
        <label for="publisherPhone">Téléphone (8 chiffres, optionnel)</label>
        <input id="publisherPhone" name="publisherPhone" type="tel"
          [(ngModel)]="model.publisherPhone" #publisherPhone="ngModel"
          pattern="^[0-9]{8}$" class="form-input" />
        <div class="error"
     *ngIf="publisherPhone.invalid && (publisherPhone.dirty || publisherPhone.touched)">
  <small *ngIf="publisherPhone.errors?.['pattern']">
    Doit contenir exactement 8 chiffres.
  </small>
</div>

      </div>

      <div class="form-row">
        <label for="releaseDate">Date de sortie</label>
        <input id="releaseDate" name="releaseDate" type="date"
          [(ngModel)]="model.releaseDate" #releaseDate="ngModel"
          required
          (ngModelChange)="onReleaseDateChange($event)"
          class="form-input" />
        <div class="error"
     *ngIf="category.invalid && (category.dirty || category.touched)">
  <small *ngIf="category.errors?.['required']">La catégorie est requise.</small>
</div>

      </div>

      <div class="form-row">
        <label for="category">Catégorie</label>
        <select id="category" name="category" [(ngModel)]="model.category" #category="ngModel" required class="form-input">
          <option value="" disabled>-- Choisir --</option>
          <option *ngFor="let c of categories" [value]="c">{{c}}</option>
        </select>
        <div class="error" *ngIf="category.invalid && (category.dirty || category.touched)">
          <small>La catégorie est requise.</small>
        </div>
      </div>

      <div class="form-row horizontal">
        <label>
          <input id="isAvailable" name="isAvailable" type="checkbox" [(ngModel)]="model.isAvailable" />
          Disponible
        </label>

        <label for="stock">Stock (optionnel)</label>
        <input id="stock" name="stock" type="number" [(ngModel)]="model.stock" #stock="ngModel" min="0" class="form-input small" />
        <div class="error"
     *ngIf="stock.invalid && (stock.dirty || stock.touched)">
  <small *ngIf="stock.errors?.['min']">Stock doit être ≥ 0.</small>
</div>

      </div>

      <div class="form-actions">
        <button type="submit" [disabled]="bookForm.invalid || titleDigitsOnly || invalidYear" class="btn primary">
          {{ editing ? 'Mettre à jour' : 'Ajouter' }}
        </button>
        <button type="button" (click)="onReset(bookForm)" class="btn light">Réinitialiser</button>
      </div>
    </form>
  </div>
  `,
  styles: []
})
export class BookFormComponent implements OnChanges {
  @Input() categories: string[] = [];
  @Input() bookToEdit: Book | null = null;
  @Output() add = new EventEmitter<Book>();
  @Output() update = new EventEmitter<Book>();

  model: Book = this.emptyModel();
  editing = false;

  // flags de validation "personnalisée" (sans directives)
  titleDigitsOnly = false;
  invalidYear = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['bookToEdit'] && this.bookToEdit) {
      this.model = { ...this.bookToEdit };
      this.editing = true;
      // recalculer flags pour l'élément à éditer
      this.onTitleChange(this.model.title);
      this.onReleaseDateChange(this.model.releaseDate);
    } else if (changes['bookToEdit'] && !this.bookToEdit) {
      this.onReset();
    }
  }

  onTitleChange(value: string) {
    const v = (value ?? '').toString().trim();
    this.titleDigitsOnly = v.length > 0 && /^\d+$/.test(v); // true si uniquement chiffres
  }

  onReleaseDateChange(value: string) {
    if (!value) { this.invalidYear = false; return; }
    const year = new Date(value).getFullYear();
    this.invalidYear = isNaN(year) || year <= 1900;
  }

  onSubmit(form: NgForm) {
    // safety: check both template-driven validity and our custom flags
    if (form.invalid || this.titleDigitsOnly || this.invalidYear) {
      // marque tous les champs pour afficher erreurs
      Object.values(form.controls).forEach(c => (c as any).markAsTouched());
      return;
    }

    if (this.editing) {
      this.update.emit({ ...this.model });
    } else {
      this.add.emit({ ...this.model, id: 0 });
    }
    this.onReset(form);
  }

  onReset(form?: NgForm) {
    this.model = this.emptyModel();
    this.editing = false;
    this.titleDigitsOnly = false;
    this.invalidYear = false;
    if (form) form.resetForm(this.model);
  }

  private emptyModel(): Book {
    return {
      id: 0,
      title: '',
      author: '',
      publisherEmail: '',
      publisherPhone: '',
      releaseDate: '',
      category: '',
      isAvailable: true,
      stock: undefined
    };
  }
}
