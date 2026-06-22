import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
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

    if (this.acceptedPolicy === true) {
      this.showPolicyError = false;
    }
  }

  showPolicyError = false;

  validateForm() {
    if (this.acceptedPolicy === false) {
      this.showPolicyError = true;
    } else if (this.acceptedPolicy === true) {
      this.showPolicyError = false;
    }
  }
}
