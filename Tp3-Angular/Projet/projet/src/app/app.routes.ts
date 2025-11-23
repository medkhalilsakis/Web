import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { GameComponent } from './game/game';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameComponent },
  { path: '**', redirectTo: '' }
];