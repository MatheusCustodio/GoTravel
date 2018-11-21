import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseProvider } from '../providers/firebase/firebase';
import {AngularFireModule} from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {UsuariosPage} from "../pages/usuarios/usuarios";
import {CadPessoaPage} from "../pages/cad-pessoa/cad-pessoa";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    UsuariosPage,
    CadPessoaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDJwe0Om_kwDEyTSmI8ZTroc6CWvopm0ZM",
      authDomain: "gotravel-94e93.firebaseapp.com",
      databaseURL: "https://gotravel-94e93.firebaseio.com",
      projectId: "gotravel-94e93",
      storageBucket: "gotravel-94e93.appspot.com",
      messagingSenderId: "19980675534"
    }),
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    UsuariosPage,
    CadPessoaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider
  ]
})
export class AppModule {}
