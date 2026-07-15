import { ViewportScroller } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private viewportScroller = inject(ViewportScroller);
  constructor() {
    this.viewportScroller.setOffset([0, 130]);
  }

  protected readonly title = signal('portfolio');

  private translate = inject(TranslateService);

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
