import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor(private http: HttpClient) {}

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),

    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),

    message: new FormControl('', {
      validators: [Validators.required, Validators.minLength(5)],
    }),
    policy: new FormControl(false, {
      validators: [Validators.requiredTrue],
    }),
  });

  activeContact = '';

  contact(param: string) {
    this.activeContact = param;
  }

  formSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    this.formReset();
  }

  formReset() {
    this.form.reset();
  }
  scrollToTop() {
    document.getElementById('hero')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
