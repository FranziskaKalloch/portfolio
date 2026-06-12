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
      // Texte werden DEutsch
    } else {
      this.activeLanguage = 'de';
      // Texte werden englisch
    }
  }

  //activeLanguage = dauerhaft geklickte Sprache
  // hoveredLanguage = Sprache, über der Maus gerade ist
  // Wenn hoveredLanguage gesetzt ist:
  // → nur hoveredLanguage sieht hover-aktiv aus
  // → activeLanguage wird optisch kurz deaktiviert
  // Wenn hoveredLanguage leer ist:
  // → activeLanguage sieht aktiv aus
}
