import { Routes } from '@angular/router';

import { Header } from './layout/header/header';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
];
