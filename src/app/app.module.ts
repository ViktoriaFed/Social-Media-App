import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ResetComponent } from './reset/reset.component';
import { ProfileComponent } from './profile/profile.component';
// import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResetComponent,
    ProfileComponent
    // EmailVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatBottomSheetModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

    FirebaseTSApp.init(
        environment.firebaseConfig
    );

 }
 }
