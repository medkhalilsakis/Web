// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookContainerComponent } from './book-container/book-container';

@Component({
  selector: 'app-root', // AppComponent reste 'app-root'
  standalone: true,
  imports: [CommonModule, BookContainerComponent],
  template: `
    <div class="outer-wrapper">
      <!-- header global / nav possible -->
      <nav class="topbar">
        <div class="logo">📚 TP Books</div>
      </nav>

      <!-- composant principal -->
      <app-book-container></app-book-container>

      <!-- footer simple -->
      <footer class="footer">
      </footer>
    </div>
  `,
  styles: [`
    .outer-wrapper { padding: 12px; }
    .topbar { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:12px; }
    .logo { font-weight:700; font-size:1.1rem; }
    .tagline { color: #6b7280; }
    .footer { margin-top:18px; text-align:center; color:#6b7280; }
  `]
})
export class AppComponent {
  year = new Date().getFullYear();
}
