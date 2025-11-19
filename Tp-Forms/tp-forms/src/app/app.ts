import { Component } from '@angular/core';
import { EtudiantForm } from './etudiant-form/etudiant-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EtudiantForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'TP Étudiant Angular';
}
