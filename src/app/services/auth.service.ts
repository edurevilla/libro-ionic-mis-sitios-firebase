import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  // Registro de usuario
  registerUser(email: string, password: string){
    return this.afAuth.auth.createUserWithEmailAndPassword( email, password)
    .then((res) => {
     // El usuario se ha creado correctamente.
    })
    .catch(err => Promise.reject(err));
  }

  loginUser(email: string, password: string){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  } 

  // Logout de usuario
  logout(){
    this.afAuth.auth.signOut().then(()=>{
      // hemos salido
    })
  }

  // Obtenemos el id de usuario.
  getUser(){
    return this.afAuth.auth.currentUser.uid;
  }

 

}
