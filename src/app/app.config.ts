import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig = {
  providers: [importProvidersFrom(BrowserModule), provideHttpClient(withInterceptorsFromDi())]
};
