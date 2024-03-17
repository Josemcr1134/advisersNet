import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { sample } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public password: string = '';
  public email: string = '';
  public SpecialistType: number = 0;
  public emailStatus:boolean = true;

  constructor(private router: Router, private authSvc: AuthService) {}

  ngOnInit(): void {}

  Login() {
    const body = {
      username: this.email,
      email: this.email,
      password: this.password,
    };
    this.authSvc.Login(body).subscribe({
      error: (err: any) => {
        console.log(err, body);
        Swal.fire({
          icon: 'error',
          title: 'Ooooops...',
          text: 'Revisa los campos y vuelve a intentarlo',

        });
      },
      next: (resp: any) => {
        console.log(resp);
        if (resp.user.status === 'disabled') {
          localStorage.clear();
          Swal.fire({
            icon: 'error',
            title: 'Ooooops...',
            text: 'Has sido deshabilitado por netcare',

          });
        } else if(resp.user.status === 'enabled' && resp.user.user_type === 1) {
          localStorage.setItem('net_token', resp.token);
          localStorage.setItem('name', resp.user.name);
          localStorage.setItem('id', resp.user.id);
          localStorage.setItem('user_type', resp.user.user_type);
          this.router.navigateByUrl('/Home');
        }
      },
    });
  };

  validarEmail() {
    return this.emailStatus = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(this.email);
  }

}
