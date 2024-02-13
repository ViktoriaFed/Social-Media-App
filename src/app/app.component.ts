import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButton } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  auth = new FirebaseTSAuth();

  constructor(private loginSheet: MatBottomSheet, private router: Router) {
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
              if (!user.emailVerified) {
                // User is signed in but email is not verified
                this.router.navigate(["emailVerification"]);
              } else {
                // User is signed in and email is verified
                this.router.navigate(["profile"]);
              }
            },
            whenSignedOut: user => {
              // User is signed out
            },
            whenSignedInAndEmailNotVerified: user => {
              // This case is now handled in the whenSignedIn callback
            },
            whenChanged: user => {
              // User state changed
            }
          }
        );
      }
    );
  }

  loggedIn() {
    return this.auth.isSignedIn();
  }

  onLogoutClick() {
    this.auth.signOut();
  }
}

