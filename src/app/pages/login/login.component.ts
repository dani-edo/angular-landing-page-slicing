import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) {
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email(): any {
    return this.formGroup.get('email');
  }

  get password(): any {
    return this.formGroup.get('password');
  }

  loginProcess(): void {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          alert(result.message);
          localStorage.setItem('token', result.token);
          this.router.navigate(['/']);
        },
        (err) => alert(err.message)
      );
    }
  }
}
