import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ListaUsuarioPage } from '../lista-usuario/lista-usuario';
import { CadastroPerguntaPage } from '../cadastro-pergunta/cadastro-pergunta';
import { ListaRespotaPage } from '../lista-respota/lista-respota';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { Usuario } from '../../modules/usuario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  listUsuario:boolean = false;
  listPergunta:boolean = false;
  /** Acrescentado para ser usado na chamada da tela */
  
  constructor(public navCtrl: NavController) {

  }

  listarUsuario(){
    this.navCtrl.push(ListaUsuarioPage.name);
  }
  
  listarPerguntas(){
    this.navCtrl.push(ListaRespotaPage.name);
  }

  cadastrarPergunta(){
    this.navCtrl.push(CadastroPerguntaPage.name);

  }
 cadastrarUsuario(){
    this.navCtrl.push(CadastroUsuarioPage.name)
  }

mostrarListaUsuario(){
  this.listUsuario=!this.listUsuario;
};

mostrarListaPergunta(){
  this.listPergunta=!this.listPergunta;
};

}

