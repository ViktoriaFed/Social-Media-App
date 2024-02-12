import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorCompState } from '../home/home.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  state = AuthenticatorCompState.REGISTER;

  constructor(private signupSheet: MatBottomSheet){}

  ngOnInit(): void {
  }

  onCreateAccountClick(){
    this.state = AuthenticatorCompState.REGISTER;
  }

}
