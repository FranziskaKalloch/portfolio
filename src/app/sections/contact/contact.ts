import { ChangeDetectorRef, Component, inject } from '@angular/core';
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
  mailSent = true;
  mailError = false;
  private feedbackTimeout?: ReturnType<typeof setTimeout>;
  private cdr = inject(ChangeDetectorRef);

  contact(param: string) {
    this.activeContact = param;
  }

  async formSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    await this.submitSendMailForm();
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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.value;

    try {
      const httpResponse = await fetch('./contact_form_mail.php', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const result = await httpResponse.json();

      if (httpResponse.ok && result.success) {
        this.showFeedback(true);
        this.formReset();
        return;
      }
      this.showFeedback(false);
    } catch {
      this.showFeedback(false);
    }
  }

  private showFeedback(success: boolean): void {
    this.mailSent = success;
    // this.mailError = !success;

    // if (this.feedbackTimeout) {
    // clearTimeout(this.feedbackTimeout);
    // }

    // this.feedbackTimeout = setTimeout(() => {
    // this.mailSent = false;
    // this.mailError = false;

    // this.cdr.detectChanges();
    // }, 4000);
  }
}
