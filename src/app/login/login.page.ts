import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = { email : '', password : ''};

  constructor(
    public alertCtrl: AlertController,
    public auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  signin() {
    this.auth.registerUser(this.user.email, this.user.password)
    .then((user) => {
      // El usuario se ha creado correctamente
      this.user.email = '';
      this.user.password = '';
      this.alertCtrl.create({
        header: 'Nuevo usuario',
        subHeader: 'El usuario se ha creado correctamente',
        buttons: ['Aceptar']
      }).then(alert => {
        alert.present();
      });
  
    })
    .catch(err => {
      this.alertCtrl.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
      }).then(alert => {
        alert.present();
      });
    });
  }

  login(){
    this.auth.loginUser(this.user.email, this.user.password).then( result => {
      // El usuario se ha logueado correctamente
      this.router.navigate(['/tabs']);
    }).catch(err=>{
      this.alertCtrl.create({
        header: 'Error',
        subHeader: err.message,
        buttons: ['Aceptar']
      }).then(alert => {
        alert.present();
      });
    });
  }
 
 
}
