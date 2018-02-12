import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";
import { AuthGuard } from 'app/login/auth-guard.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthGuard]
})
export class LoginComponent implements OnInit {

  loginSuccess: boolean = true;

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  signInWithEmail() {

    this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
        this.router.navigate(['Actualizar']);
      })
      .catch((err) => console.log('error: ' + err, this.loginSuccess=false));
  }



  ngOnInit() {
  }

}
