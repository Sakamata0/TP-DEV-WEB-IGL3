import { Routes } from '@angular/router';
import { Result } from './result/result';
import { Game } from './game/game';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'game', component: Game },
  { path: 'result', component: Result },
  { path: '**', redirectTo: 'home' }
];