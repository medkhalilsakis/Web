import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Taches } from './taches/taches';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Taches],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('activite5et6');
}
