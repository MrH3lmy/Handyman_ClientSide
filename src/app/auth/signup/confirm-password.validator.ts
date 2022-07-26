import { AbstractControl } from '@angular/forms';

export class ConfirmPasswordValidator {
  /**
   * Check matching password with confirm password
   * @param control AbstractControl
   */
  static MatchPassword(control: AbstractControl) {
    const password = control.get('Password').value;

    const confirmPassword = control.get('CPassword').value;

    if (password !== confirmPassword) {
      control.get('CPassword').setErrors({ ConfirmPassword: true });
    } else {
      return null;
    }
  }
}
