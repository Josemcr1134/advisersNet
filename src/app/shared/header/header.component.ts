import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public show:boolean = false;
  public userMenu:boolean = false;
  public showMenu:boolean = false;
  public username:string = '';
  public changePassword:boolean = false;
  public samePassword:boolean = true;
  public password:string = '';
  public password2:string = '';
  constructor(private authSvc:AuthService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('name') || '';
  };

  showAdviserMenu(){
    this.show = !this.show;
  };
  ShowChangePasswordModal(){
    this.changePassword = !this.changePassword;
  };

  VerifySamePasswords(){
    if (this.password === this.password2) {
        return this.samePassword = true;
    } else {
      return this.samePassword = false;
    };
  };

  ChangePassword(){
    const body = {
      new_password1: this.password,
      new_password2: this.password2
    };

    this.authSvc.ChangePassword(body)
            .subscribe({
              error:(err:any) => {
                Swal.fire('Oooops', 'No pudimos cambiar la contraseña del administrador', 'error');
              },
              next:(resp:any) => {
                Swal.fire('Éxito', 'Contraseña modificada', 'success');
                this.changePassword = !this.changePassword;
                this.password = '';
                this.password2 = '';
              }
            });

  };
}
