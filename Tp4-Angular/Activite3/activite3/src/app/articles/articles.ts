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
    { titre: 'Article 1', contenu: "Contenu 1", importance: 'élevée' },
    { titre: 'Article 2', contenu: "Contenu 2", importance: 'moyenne' },
    { titre: 'Article 3', contenu: "Contenu 3", importance: 'faible' }
  ];

  newTitle = '';
  newContent = '';
  newImportance = 'moyenne';

  addArticle() {
    const t = this.newTitle?.trim();
    const c = this.newContent?.trim();
    if (!t || !c) return;
    this.articles.push({ titre: t, contenu: c, importance: this.newImportance });
    this.newTitle = '';
    this.newContent = '';
    this.newImportance = 'moyenne';
  }
}
