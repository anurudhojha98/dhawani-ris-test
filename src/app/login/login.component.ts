import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from '../constants';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public password: string;
  public login: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private authService: AuthService,
  ) {
  }

  public ngOnInit() {
    this.loginForm = this.formBuilder.group({
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  public onSubmit() {
    const value = this.loginForm.value;
    this.authService.userLogin(value).subscribe(
      (res) => {
        if (res.success === true) {
          localStorage.setItem('token', res.data.token);
          this.snackBar.open('User login successfully.', Constants.SNACK_BAR_SUCCESS_MESSAGE_ACTION, {
            duration: Constants.SNACK_BAR_MESSAGE_DURATION,
          });
          this.router.navigate(['/dashboard/home']);
        }
      },
      (errors) => {
        const parseErr = JSON.parse(errors);
        this.snackBar.open(parseErr.error[0].username, Constants.SNACK_BAR_ERR_MESSAGE_ACTION, {
          duration: Constants.SNACK_BAR_MESSAGE_DURATION,
        });
        console.log(parseErr);
      },
    );
    // this.loginForm.reset();
  }
}
