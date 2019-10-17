import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalNuevoSitioPageModule } from './modal-nuevo-sitio/modal-nuevo-sitio.module';
import { ImgService } from './services/img.service';
import { IonicStorageModule } from '@ionic/storage';
import { ModalDetalleSitioPageModule  } from './modal-detalle-sitio/modal-detalle-sitio.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AngularFireAuth } from '@angular/fire/auth';


export const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx.xxx.xxx",
  databaseURL: "https://xxxxx.firebaseio.com",
  projectId: "xxx",
  storageBucket: "xxx.appspot.com",
  messagingSenderId: "xxx"
} 



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalNuevoSitioPageModule,
    IonicStorageModule.forRoot(),
    ModalDetalleSitioPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImgService,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
