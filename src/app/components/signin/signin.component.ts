import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  public passwordVisible: boolean = false;
  public accessToken!: string | null;
  public mess: string = '';

  public submitForm(): void {
    console.log('submit', this.validateForm.value);

    this.loginService.loginUser(this.validateForm.value).subscribe((login) => {
      console.log('login', login);
      const accessToken = login.result.accessToken;
      localStorage.setItem('accessToken', accessToken);
      this.accessToken = localStorage.getItem('accessToken');
      console.log('accessToken', accessToken);
      if (this.accessToken) {
        this.router.navigate(['/treeDropdown']);
      }
    });
    console.log('accessToken', this.accessToken);
    if (!this.accessToken) {
      this.mess = 'Username or Password is not valid';
      console.log('mess', this.mess);
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}
