import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizGame } from './quiz-game/quiz-game';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, QuizGame],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('jeu');
}
