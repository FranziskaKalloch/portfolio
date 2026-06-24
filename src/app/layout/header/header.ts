import { Component } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('language') || 'en';
    this.activeLanguage = savedLanguage;
    this.translate.use(savedLanguage);
  }

  activeLanguage = 'en';
  hoveredLanguage = '';
  activeSection = '';

  changeLanguage(language: string) {
    if (language === 'en') {
      this.activeLanguage = 'en';
    } else {
      this.activeLanguage = 'de';
    }
    this.translate.use(language);
    localStorage.setItem('language', language);
  }

  onMouseOver(language: string) {
    if (language !== this.activeLanguage) {
      this.hoveredLanguage = language;
    }
  }

  onMouseLeave() {
    this.hoveredLanguage = '';
  }

  setActiveSection(sec: string) {
    this.activeSection = sec;
  }
}
