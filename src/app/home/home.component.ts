import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  state = AuthenticatorCompState.LOGIN;

  constructor(private signupSheet: MatBottomSheet){}

  ngOnInit(): void {
    
  }

    onLoginClick(){
      this.state = AuthenticatorCompState.LOGIN;
    }
    
    onForgotPasswordClick(){
      this.state = AuthenticatorCompState.FORGOT_PASSWORD;
    }

    onCreateAccountClick(){
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