import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appConfig } from './app.config';
import { routes } from './app.routes';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(), // Asegúrate de incluir provideHttpClient
    provideRouter(routes), // Incluye el router si es necesario
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
