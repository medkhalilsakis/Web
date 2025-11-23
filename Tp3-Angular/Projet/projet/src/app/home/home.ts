import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="question-card">
      <h2>Bienvenue au Quiz</h2>
      <p class="small">Répondez aux questions, marquez des points et essayez d'obtenir le meilleur score !</p>
      <div style="margin-top:1rem;">
        <button class="btn btn-primary" (click)="start()">Commencer le jeu</button>
        <button class="btn btn-outline" style="margin-left:0.6rem" (click)="openDemo()">Mode Démo</button>
      </div>
    </div>
  `
})
export class HomeComponent{
  constructor(private router: Router){}
  start(){ this.router.navigate(['/game']); }
  openDemo(){ this.router.navigate(['/game']); }
}