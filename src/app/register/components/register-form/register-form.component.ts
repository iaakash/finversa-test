import {Component, OnInit, Input} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Input() config: object;
  registerFormProperties;
  registerForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit() {
    // remap the API to be suitable for iterating over it
    this.registerFormProperties = Object.keys(this.config).map(prop => {
      return Object.assign({}, {key: prop}, this.config[prop]);
    });

    // setup the form
    const formGroup = {};
    for (let prop of Object.keys(this.config)) {
      formGroup[prop] = new FormControl(
        this.config[prop].value || '',
        this.mapValidators(this.config[prop].validation),
      );
    }

    this.registerForm = new FormGroup(formGroup);
  }

  private mapValidators(validators) {
    const formValidators = [];

    if (validators) {
      for (const validation of Object.keys(validators)) {
        if (validation === 'required') {
          formValidators.push(Validators.required);
        } else if (validation === 'min') {
          formValidators.push(Validators.min(validators[validation]));
        }
      }
    }

    return formValidators;
  }

  onSubmit(form) {
    this.router.navigate(['/dashboard']);
  }
}
