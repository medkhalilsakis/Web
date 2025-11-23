import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UtilisateurComponent } from './utilisateur/utilisateur';
import { ProfilComponent } from './profil/profil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UtilisateurComponent, ProfilComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp2');
}
