import { AbstractControl, FormGroup } from '@angular/forms';

export function passwordMatchValidator(g:AbstractControl) {
    return g.get('newPassword')?.value === g.get('passwordConfirm')?.value
        ? null : { 'mismatch': true };
}
/* passwordMatchValidator(fg: AbstractControl){
  return fg.get('password')?.value === fg.get('password2')?.value ? null : {notmatched: true}
} */
