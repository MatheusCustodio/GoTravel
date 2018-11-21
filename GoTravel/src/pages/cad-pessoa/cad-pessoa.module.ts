import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadPessoaPage } from './cad-pessoa';

@NgModule({
  declarations: [
    CadPessoaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadPessoaPage),
  ],
})
export class CadPessoaPageModule {}
