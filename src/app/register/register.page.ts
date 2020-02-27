import { Component, OnInit } from '@angular/core';
import { fieldsForRegsiter } from '../../config';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerConfig: object = fieldsForRegsiter;
  
  constructor() { }

  ngOnInit() {
  }

}
