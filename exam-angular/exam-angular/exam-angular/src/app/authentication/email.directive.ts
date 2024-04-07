import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true
    }
  ]
})
export class EmailDirective implements Validator, OnChanges{
  @Input() appEmail: string = '';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const {currentValue} = changes['appEmail'];

    if(currentValue?.length){
      this.validate(currentValue)
    }
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return EmailDirective.emailValidator(control);
  }

  static emailValidator(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^\w{2,}(\.\w+)*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]{2,}$/;
    const isValid = emailRegex.test(control.value);
    return isValid ? null : { invalidEmail: true };
  }
}
