import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  activeLanguage = 'en';
  hoveredLanguage = '';

  changeLanguage(lng: string) {
    if (lng === 'en') {
      this.activeLanguage = 'en';
    } else {
      this.activeLanguage = 'de';
    }
  }

  onMouseOver(language: string) {
    if (language !== this.activeLanguage) {
      this.hoveredLanguage = language;
    }
  }

  onMouseLeave() {
    this.hoveredLanguage = '';
  }
}
