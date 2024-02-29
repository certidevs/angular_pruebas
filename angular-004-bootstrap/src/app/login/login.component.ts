import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: const [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginForm: FormGroup;
  httpClient: any;
  router: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  save() {
    let login: Login = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.httpClient.post('http://localhost:3000/login', login).subscribe((res: any) => {
      console.log(res);
      // redirect to home page
      this.router.navigate(['/home']);
    });
  }


