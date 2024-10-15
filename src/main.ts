import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Importar el módulo principal

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
