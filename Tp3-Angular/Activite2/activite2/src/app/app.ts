import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Produit } from './produit/produit';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule, Produit],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('activite2');

  panier: string[] = [];

  ajouterAuPanier(event: string) {
    this.panier.push(event);
  }
}
