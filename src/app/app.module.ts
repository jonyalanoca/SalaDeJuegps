import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AutenticacionComponent } from './components/autenticacion/autenticacion.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AutenticacionComponent,
    ErrorComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    // provideFirebaseApp(() => initializeApp({"projectId":"fire-auth-angular-61ef7","appId":"1:1057249748866:web:94434a71b05bcfd9c3919b","storageBucket":"fire-auth-angular-61ef7.appspot.com","apiKey":"AIzaSyDZVPiV1vk9DH47HEInNmvTLp3meB66o_U","authDomain":"fire-auth-angular-61ef7.firebaseapp.com","messagingSenderId":"1057249748866"})),
    provideAuth(() => getAuth()),
    // provideFirebaseApp(() => initializeApp({"projectId":"labofireangularauth","appId":"1:32782728599:web:250b40df9e26a56da8d8d2","storageBucket":"labofireangularauth.appspot.com","apiKey":"AIzaSyAw1Vm4xkB6k_UvKJMm3cBECoowd3gGhBs","authDomain":"labofireangularauth.firebaseapp.com","messagingSenderId":"32782728599"})),
    provideFirebaseApp(() => initializeApp({"projectId":"deployangular2","appId":"1:918857890364:web:52e350c9dcc12c360a2139","storageBucket":"deployangular2.appspot.com","apiKey":"AIzaSyD7-zm2DiE-kcElTRKtDaFalXu7OiPKlmQ","authDomain":"deployangular2.firebaseapp.com","messagingSenderId":"918857890364"}))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
