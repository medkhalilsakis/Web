import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="app-shell">
      <div class="card">
        <div class="header">
          <div class="logo">Quiz</div>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class AppComponent {}