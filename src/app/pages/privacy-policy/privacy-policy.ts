import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

import { Footer } from '../../layout/footer/footer';
import { Header } from '../../layout/header/header';
import { BurgerMenu } from '../../shared/burger-menu/burger-menu';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterLink, TranslatePipe, Header, Footer, BurgerMenu],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {
  isBurgerMenuOpen = false;

  toggleBurgerMenu() {
    this.isBurgerMenuOpen = !this.isBurgerMenuOpen;
  }
}
