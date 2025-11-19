import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Welcome } from './welcome/welcome';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('activite1');
}
