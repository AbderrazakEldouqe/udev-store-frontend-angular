import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/_core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = 'admin';
  password = 'admin';
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.initializeFormGroup();
  }
  initializeFormGroup(): void {
    this.loginForm = new FormGroup({
      login: new FormControl(null, []),
      password: new FormControl(null, []),
    });
  }
  onSubmit() {
    if (
      this.loginForm.value.login == this.login &&
      this.loginForm.value.password == this.password
    ) {
      this.router.navigate(['/admin/dashboard']);
      this.notification.success(
        'Welcome' + ' ' + this.loginForm.value.login,
        'Login Success'
      );
    } else {
      this.notification.error('Invalid Username Or Password', 'Login Failure');
    }
    this.loginForm.reset();
  }
}
