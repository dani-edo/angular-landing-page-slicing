import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private authService: AuthServiceService) {
    this.formGroup = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  loginProcess(): void {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          alert(result.message);
        },
        (err) => alert(err.message)
      );
    } else {
      alert('Form not valid!');
    }
  }
}
