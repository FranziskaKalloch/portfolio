import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';

@Component({
  selector: 'app-legal-notice',
  imports: [RouterLink, TranslatePipe, Header, Footer, BurgerMenu],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  isBurgerMenuOpen = false;

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }
}
