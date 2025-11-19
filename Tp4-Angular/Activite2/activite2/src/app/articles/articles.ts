import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.html',
  styleUrls: ['./articles.css'],
  imports: [FormsModule, CommonModule]
})
export class Articles {
  articles = [
    { titre: 'LapTop Asus', contenu: "Contenu de l'article 1"},
    { titre: 'Laptop Gaming', contenu: "Contenu de l'article 2"},
    { titre: 'Laptop HP', contenu: "Contenu de l'article 3"}
  ];

  newTitle = '';
  newContent = '';

  addArticle() {
    const title = this.newTitle?.trim();
    const content = this.newContent?.trim();
    if (!title || !content) return;
    // évite doublons simples
    if (this.articles.some(a => a.titre === title)) return;
    this.articles.push({ titre: title, contenu: content });
    this.newTitle = '';
    this.newContent = '';
  }
}
