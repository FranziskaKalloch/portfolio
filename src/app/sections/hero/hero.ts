import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  scrollToContact() {
    const contactSection = document.getElementById('contact');

    contactSection?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
