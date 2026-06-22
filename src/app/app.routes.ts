import { Routes } from '@angular/router';

import { Header } from './layout/header/header';
import { Home } from './pages/home/home';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

// import { WhyMe } from './sections/why-me/why-me';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  // { path: 'why-me', component: WhyMe },

  {
    path: 'legal-notice',
    component: LegalNotice,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
];
