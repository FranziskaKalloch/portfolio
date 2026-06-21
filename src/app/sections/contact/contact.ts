import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  activeContact = '';

  contact(param: string) {
    this.activeContact = param;
  }

  acceptedPolicy = false;

  changePolicy() {
    this.acceptedPolicy = !this.acceptedPolicy;
  }
}
