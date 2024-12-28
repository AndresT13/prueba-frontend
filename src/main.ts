import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormSearchComponent } from './app/components/form-search/form-search.component';
import { ResumenComponent } from './app/components/resumen/resumen.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot([
        { path: '', component: FormSearchComponent },
        { path: 'resumen/:numeroDocumento', component: ResumenComponent },
      ])
    ),
  ],
}).catch((err) => console.error(err));
