import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CreateaccountComponent } from './createaccount/createaccount.component';

import { AppRoutingModule } from './app-routing.module';
//import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {GoogleLoginProvider, SocialAuthServiceConfig,} from'angularx-social-login';
import{FormsModule} from '@angular/forms';
import { SocialLoginModuleComponent } from './createaccount/social-login-module/social-login-module.component';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    CreateaccountComponent,
    SocialLoginModuleComponent,
   ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [{
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          ]
          
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
