import {AbstractControl} from '@angular/forms';

export function mobileNumberValidator(control: AbstractControl): any {
  if (control.value) {
    if (control.value.toString().match(
        /(^[0-9]{10}$)/)) {
      return null;
    } else {
      return {'invalidMobile': true};
    }
  }
}
