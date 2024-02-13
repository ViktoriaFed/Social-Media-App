import { Component } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'social';
  auth = new FirebaseTSAuth();

  constructor(private loginSheet: MatBottomSheet, private router: Router){
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
              
            },
            whenSignedOut: user => {
            },
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]);
            },
            whenSignedInAndEmailVerified: user => {
    
            },
            whenChanged: user => {
    
            }
          }
        );
     }
    );
  }
  loggedIn(){
    return this.auth.isSignedIn();
}

onLogoutClick(){
  this.auth.signOut();
}
}
