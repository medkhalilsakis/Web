import { Routes } from '@angular/router';


export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'game', component: GameComponent },
{ path: '**', redirectTo: '' }
];
