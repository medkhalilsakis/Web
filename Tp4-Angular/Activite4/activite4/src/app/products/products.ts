import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  imports: [CommonModule, FormsModule]
})
export class Products {
  products = [
    { name: 'Produit A', stock: 75 },
    { name: 'Produit B', stock: 45 },
    { name: 'Produit C', stock: 10 }
  ];

  getStockColor(stock: number): string {
    if (stock > 50) return 'green';
    if (stock >= 20) return 'orange';
    return 'red';
  }

  // exemple : update de stock
  updateStock(p: any, value: number) {
    p.stock = Math.max(0, value);
  }
}
