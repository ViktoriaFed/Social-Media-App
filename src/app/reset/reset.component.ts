import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  firebasetsAuth: FirebaseTSAuth;

  constructor(private resetSheet: MatBottomSheet){
    this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
  }

  onResetClick(resetEmail: HTMLInputElement){
    let email = resetEmail.value;
          if(this.isNotEmpty(email)) {
            this.firebasetsAuth.sendPasswordResetEmail(
              {
                email: email,
                onComplete: (err) => {
                    // alert(`Reset email sent to ${email}`);
                    this.resetSheet.dismiss();
                }
            }
            );
          }
  }

  isNotEmpty(text:string){
    return text != null && text.length > 0;
  }


}
