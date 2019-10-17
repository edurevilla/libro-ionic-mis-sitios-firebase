import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    public afAuth: AngularFireAuth,
   ) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {

      this.afAuth.auth.onAuthStateChanged((user: firebase.User) => {
        if (user) {
        resolve(true);
        } else {
        console.log('El usuario no está logueado');
        this.router.navigate(['/login']);
        resolve(false);
        }
      });
    });
 
  }
}
