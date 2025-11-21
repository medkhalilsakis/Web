import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './produit.html',
  styleUrl: './produit.css',
})
export class Produit {
  @Input() nomProduit: string = 'Produit Exemple';
  @Input() imageUrl: string = '/assets/default-product.jpg';
  @Input() prix: number = 99.99;

  @Output() ajouterAuPanier = new EventEmitter<string>();

  // Activité 5 : disponibilité
  enStock: boolean = true;

  toggleStock() {
    this.enStock = !this.enStock;
  }

  // Activité 3 + 6 : event + communication parent
  ajouter() {
    if (this.enStock) {
      this.ajouterAuPanier.emit(this.nomProduit);
      alert('Produit ajouté au panier ✔️');
    }
  }

}
