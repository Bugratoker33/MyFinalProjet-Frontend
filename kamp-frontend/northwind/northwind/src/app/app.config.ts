import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { FormBuilder,FormControl,Validator,FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms'
import { privateDecrypt } from 'crypto';
import { authInterceptor } from './interceptors/auth.interceptor';



export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),provideHttpClient(),
    provideToastr({positionClass:"toast-bottom-right"}),provideAnimations(), 
    
   
  ]};
