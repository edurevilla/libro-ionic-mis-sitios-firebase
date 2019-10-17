import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(public asf: AngularFirestore,  public auth: AuthService) { }

  guardaSitio(sitio){
    sitio.usuario = this.auth.getUser();
  
    return this.asf.collection('sitios').add(sitio).then((newItem) => {
      console.log(newItem);
    })
    .catch(err => {
      console.log(err);
    });
  }

  getSitios(){
    return this.asf.collection('sitios',ref => ref.where('usuario', '==',  this.auth.getUser())).snapshotChanges();
  }

  actualizaSitio(sto,id){
    const sitio: any = {
        description: sto.description,
        foto: sto.foto,
        lat: sto.lat,
        lng: sto.lng,
        usuario: sto.usuario
    }
 
    return this.asf.collection('sitios').doc(id).update(sitio);
  }

  public borrarSitio(id){
    return this.asf.collection('sitios').doc(id).delete();
  }

}
