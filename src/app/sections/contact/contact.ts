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

  async formSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // await this.submitSendMailForm();
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

  async submitSendMailForm(): Promise<void> {
    // Zusätzliche Sicherheit:
    // Falls die Methode irgendwann direkt aufgerufen wird.
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Werte aus dem Formular auslesen
    const { name, email, message } = this.form.value;

    try {
      // Später den Domainnamen anpassen.
      // Lokal kannst du auch nur "send_mail.php" verwenden,
      // wenn die PHP-Datei im gleichen Verzeichnis auf dem Server liegt.
      const httpResponse = await fetch('./send_mail.php', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        // Die Keys müssen exakt so heißen,
        // wie sie in deiner send_mail.php erwartet werden.
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      // Antwort der PHP-Datei lesen
      const result = await httpResponse.json();

      if (result.success) {
        console.log('✅ E-Mail erfolgreich versendet.');

        // Formular zurücksetzen
        this.formReset();
      } else {
        console.error('❌ Fehler beim Mailversand:', result.error);
      }
    } catch (error) {
      console.error('❌ Netzwerkfehler:', error);
    }
  }
}
