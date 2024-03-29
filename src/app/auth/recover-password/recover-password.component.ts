import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css']
})
export class RecoverPasswordComponent implements OnInit {
  public uid:string = '';
  public token:string = '';
  public new_password1:string = '';
  public new_password2:string = '';
  public samePassword:boolean = true;
  constructor(private authSvc:AuthService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ uid, token }) => {
      this.uid = uid;
      this.token = token;
      console.log(this.uid, this.token);
    });
  };

  VerifySamePasswords(){
    if (this.new_password1 === this.new_password2) {
        return this.samePassword = true;
    } else {
      return this.samePassword = false;
    };
  };

  ChangePassword(){
    if (this.new_password1 === this.new_password2) {

      const body = {
        new_password1: this.new_password1,
        new_password2: this.new_password2,
        uid: this.uid,
        token: this.token
      };

      this.authSvc.ConfirmNewPassword(body)
          .subscribe({
            error:(err:any) => {
              console.log(err);
              Swal.fire('Ooops', 'No pudimos cambiar tu contraseña', 'error');
            },
            next:(resp:any) => {
              console.log(resp);
              Swal.fire('Éxito', 'Nueva contraseña guardada correctamente', 'success');
              this.router.navigateByUrl('')
            }
          })
    } else {
      Swal.fire('Ooops', 'Las contraseñas deben coincidir', 'error');
      this.new_password1 = '';
      this.new_password2 = '';
    }
  }

}
