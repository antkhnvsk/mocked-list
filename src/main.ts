import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import ROUTES from './main.routes';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(ROUTES)],
}).catch((err) => console.error(err));
