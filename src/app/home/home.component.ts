import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RegistrationComponent } from '../registration/registration.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  firebasetsAuth: FirebaseTSAuth;
  // state = AuthenticatorCompState.LOGIN;

  constructor(private signupSheet: MatBottomSheet, private snackBar: MatSnackBar){
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
    
  }

  // onLoginClick(loginEmail: HTMLInputElement, loginPassword: HTMLInputElement) {
  //   let email = loginEmail.value;
  //   let password = loginPassword.value;
  
  //   if (this.isNotEmpty(email) && this.isNotEmpty(password)) {
  //     this.firebasetsAuth.signInWith({
  //       email: email,
  //       password: password,
  //       onComplete: (uc) => {
  //         this.snackBar.open('Logged In', 'Dismiss', {
  //           duration: 3000, // Set the duration for the notification
  //           horizontalPosition: 'center',
  //           verticalPosition: 'bottom',
  //         });
  //       },
  //       onFail: (err) => {
  //         this.snackBar.open(err, 'Dismiss', {
  //           duration: 3000, // Set the duration for the notification
  //           horizontalPosition: 'center',
  //           verticalPosition: 'bottom',
  //         });
  //       },
  //     });
  //   }
  // }

    onLoginClick(
      loginEmail: HTMLInputElement,
      loginPassword: HTMLInputElement
    ){
      let email = loginEmail.value;
      let password = loginPassword.value;

    if(this.isNotEmpty(email) && 
        this.isNotEmpty(password)) {

        this.firebasetsAuth.signInWith(
          {
            email: email,
            password: password,
            onComplete: (uc) => {
                alert("Logged In");
            },
            onFail: (err) => {
                alert(err);
            }
        }
        );

}
    }
    
    onRegisterClick(){
      this.signupSheet.open(RegistrationComponent);
    }
   
    onForgotPasswordClick(){
      this.signupSheet.open(RegistrationComponent);
        }

    isLoginState(){
    }

    isForgotPasswordState(){
    }

    isRegisterState(){
    }

    isNotEmpty(text:string){
      return text != null && text.length > 0;
    }
  
    isAMatch(text: string, comparedWith: string){
      return text == comparedWith;
  }
}
export enum AuthenticatorCompState {
      LOGIN,
      REGISTER,
      FORGOT_PASSWORD
    }