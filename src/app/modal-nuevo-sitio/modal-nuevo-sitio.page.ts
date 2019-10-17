import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { ImgService } from '../services/img.service';
import { FirebaseDbService } from '../services/firebase-db.service';

const { Camera } = Plugins;


@Component({
  selector: 'app-modal-nuevo-sitio',
  templateUrl: './modal-nuevo-sitio.page.html',
  styleUrls: ['./modal-nuevo-sitio.page.scss'],
})
export class ModalNuevoSitioPage implements OnInit {

  lat;
  lon;
  description;
  foto;
  preview;

  constructor(
    private modalCtrl: ModalController,
    public img: ImgService,
    private dbFirebase: FirebaseDbService
    ) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalCtrl.dismiss();
  }
  
  async sacarFoto(){
    try {
      const profilePicture = await Camera.getPhoto({
      quality: 50,
      height: 400,
      width: 600,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      });
      this.foto = 'data:image/png;base64,' + profilePicture.base64String;
      this.preview = this.img.getImage(this.foto);
    } catch (error) {
      console.error(error);
    }
  }

  guardarSitio() {
    const sitio = {
      lat: this.lat,
      lng: this.lon ,
      description: this.description,
      foto: this.foto
    };
    this.dbFirebase.guardaSitio(sitio).then(res => {
      console.log('Sitio guardado en firebase:');
      this.cerrarModal();
    });
  }
 
 

}
