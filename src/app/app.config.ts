import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),

    // Zwischen den Sprachen switch:
    // provideTranslateService({
    //  language: 'en';  ---> Startsprache
    //  fallbackLang: 'en';
    //  loader: provideTranslateHttpLoader({
    //
    //  })
    // })
  ],
};

// TranslateDirective in den Import von der app.ts schreiben
// dann wird es in das HTML ebenfalls eingebunden mit eine Pipe
// {{ 'id' | translate}}
// man muss eine ID angeben, der senkrechte Strich steht für Pipe
//  und die Pipe heisst translate
//
