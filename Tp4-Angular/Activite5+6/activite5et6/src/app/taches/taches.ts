import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-taches',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './taches.html',
  styleUrls: ['./taches.css']
})
export class Taches {

  taches = [
    { description: 'Finir le TP Angular', complete: false, priorite: 'haute' },
    { description: 'Lire la documentation', complete: true, priorite: 'moyenne' },
    { description: 'Organiser mes fichiers', complete: false, priorite: 'basse' }
  ];

  // Basculer complété ↔ non complété
  toggleStatut(tache: any) {
    tache.complete = !tache.complete;
  }

  // Style selon la priorité
  getColor(priorite: string): string {
    switch (priorite) {
      case 'haute': return 'red';
      case 'moyenne': return 'orange';
      case 'basse': return 'green';
      default: return 'black';
    }
  }
}
