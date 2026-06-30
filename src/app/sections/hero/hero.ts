import { Component, Input } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.activeLanguage = savedLanguage;
    this.translate.use(savedLanguage);
  }

  @Input() isBurgerMenuOpen = false;

  scrollToContact() {
    const contactSection = document.getElementById('contact');

    contactSection?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  activeLanguage = 'en';
  hoveredLanguage = '';

  onMouseOver(language: string) {
    this.hoveredLanguage = language;
  }

  onMouseLeave() {
    this.hoveredLanguage = '';
  }

  changeLanguage(language: string) {
    this.activeLanguage = language;
    this.translate.use(language);
    localStorage.setItem('language', language);
  }
}
