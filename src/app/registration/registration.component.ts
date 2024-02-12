import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { AuthenticatorCompState } from '../home/home.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  firebasetsAuth: FirebaseTSAuth;

  constructor(private signupSheet: MatBottomSheet){
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
  }

  onRegisterClick(
    
    registerEmail: HTMLInputElement,
    registerPassword: HTMLInputElement,
    registerConfirmPassword: HTMLInputElement)
    {
    let email = registerEmail.value;
    let password = registerPassword.value;
    let confirmPassword = registerConfirmPassword.value;

    if(
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) && 
      this.isNotEmpty(confirmPassword) &&
      this.isAMatch(password, confirmPassword)
    ){
    this.firebasetsAuth.createAccountWith(
      {
         email: email,
         password: password,
         onComplete: (uc) => {
          alert("Account Created");
            registerEmail.value = "";
            registerPassword.value = "";
            registerConfirmPassword.value = "";
         },
         onFail: (err) => {
          alert("Failed to create the account.");
         }
       })};
    }

    onResetClick(){}

  isNotEmpty(text:string){
    return text != null && text.length > 0;
  }

  isAMatch(text: string, comparedWith: string){
    return text == comparedWith;
}

}
