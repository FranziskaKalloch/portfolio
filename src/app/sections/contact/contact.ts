import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink, ReactiveFormsModule],
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
}

// @if(policy.touched && !name.valid) {
// p<div class="checkbox-error-text error">Please accept the privacy policy</div>

// <button (click)="untouch()">

// untouch() {
// this.policy.markAsUntouched();}

//
// acceptedPolicy = false;

// changePolicy() {
// this.acceptedPolicy = !this.acceptedPolicy;

// if (this.acceptedPolicy === true) {
// this.showPolicyError = false;
// }
// }

// showPolicyError = false;

// validateForm() {
// if (this.acceptedPolicy === false) {
// this.showPolicyError = true;
// } else if (this.acceptedPolicy === true) {
// this.showPolicyError = false;
// }
// }

// async submitsendMailForm() {
// prüfen, ob FORM Valide ist, wenn nein return

//  const{senderName, email, message} = this.sendMailForm.value
//  try {
//     const httpResponse = await fetch('https://deine-domain.de/sendMail.php'), {
//     method: 'POST',
//      headers: { 'Content-Type': 'applications/json'},
//      body: JSON.stringify({
//        name: senderName,
//        email: email,
//        message: message,
// }),
// }),
//  const result = await httpResponse.json();
//  if(result.sucess) {
//    TO-DO EMAIL erfolgreich gesendet
// } else { TO-DO: Fehler beim senden}
//  catch (error) {TO DO: Netzwerkfehler}
//  }
