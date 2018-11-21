import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FirebaseProvider} from "../../providers/firebase/firebase";
import {UsuariosPage} from "../usuarios/usuarios";

/**
 * Generated class for the CadPessoaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cad-pessoa',
  templateUrl: 'cad-pessoa.html',
})
export class CadPessoaPage {

  public nome:string='';

  public telefone:string='';

  constructor(public navCtrl: NavController, public navParams: NavParams, private afs:FirebaseProvider, private alertCtrl: AlertController) {
  }

  public cadastrar() {
    console.log('passou aqui');
    this.afs.cadUsuario({"nome" : this.nome, "telefone" : this.telefone }).then((ref:any)=>{
      console.log(ref);
      this.alertCtrl.create({
        title : 'Usuario Cadastrado com sucesso!',
        message : 'Usuario cadastrado, vá para a pagina de listagem para ver detalhes',
        buttons : [{
          text: 'Ok',
          handler : ()=>{
            this.navCtrl.setRoot(UsuariosPage);
          }
        }]
      }).present();
    }).catch((err:any)=>{
      console.error(err);
    });;
  }
}
