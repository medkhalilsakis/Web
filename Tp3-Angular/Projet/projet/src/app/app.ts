import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Game } from './game/game';
import { Home } from './home/home';
import { Question } from './question/question';
import { Score } from './score/score';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Game,Question,Score],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projet');
}
