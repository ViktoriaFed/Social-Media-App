import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RegistrationComponent } from '../registration/registration.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  state = AuthenticatorCompState.LOGIN;

  firebasetsAuth: FirebaseTSAuth;

  constructor(private signupSheet: MatBottomSheet){
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
    
  }

    onLoginClick(){
      this.state = AuthenticatorCompState.LOGIN;
    }
    
    onForgotPasswordClick(){
      this.state = AuthenticatorCompState.FORGOT_PASSWORD;
    }

    onRegisterClick(){
      this.signupSheet.open(RegistrationComponent);
      this.state = AuthenticatorCompState.REGISTER;
    }

    isLoginState(){
      return this.state == AuthenticatorCompState.LOGIN;
    }

    isForgotPasswordState(){
      this.state == AuthenticatorCompState.FORGOT_PASSWORD;
    }

    isRegisterState(){
      this.state == AuthenticatorCompState.REGISTER;
    }

}
export enum AuthenticatorCompState {
      LOGIN,
      REGISTER,
      FORGOT_PASSWORD
    }