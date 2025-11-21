import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bienvenue } from './bienvenue/bienvenue';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bienvenue],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('activite1');
}
