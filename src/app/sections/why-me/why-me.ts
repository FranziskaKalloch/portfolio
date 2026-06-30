import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-why-me',
  imports: [TranslatePipe],
  templateUrl: './why-me.html',
  styleUrl: './why-me.scss',
})
export class WhyMe {
  scrollToContact() {
    const contactSection = document.getElementById('contact');

    contactSection?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
