import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  public listUsuarios: any[]=[];

  constructor(private db: AngularFirestore) {
  }
  public listaUsuarios() {
    this.db.collection('usuarios').valueChanges().subscribe((obj : any[])=>{
      this.listUsuarios = [...obj];
    })
  }
  public cadUsuario(obj:any): Promise<any>{
    return this.db.collection('usuarios').add(obj)
  }


}
