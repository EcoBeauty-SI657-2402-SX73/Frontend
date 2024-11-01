import { Component } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  passwordMismatch: boolean = false;

  onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      this.passwordMismatch = true;
    } else {
      this.passwordMismatch = false;
      // Implement password change logic here
      console.log('Password changed successfully');
    }
  }
}
