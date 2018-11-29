import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Pergunta } from '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';
import { CadastroPerguntaPage } from '../cadastro-pergunta/cadastro-pergunta';
/**
 * Generated class for the VisualizarRespostaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-resposta',
  templateUrl: 'visualizar-resposta.html',
})
export class VisualizarRespostaPage {
 perguntas : Pergunta;
 
 load;
  conteudoAlert = {titulo:'', mensagem:''}
  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private _alertCtrl: AlertController,
    private _loadCtr: LoadingController,
    private _http: HttpClient

     
     )
     
     {
    
      this.perguntas = this.navParams.get('perguntaSelecionada');
      this.load = _loadCtr.create(
        {content: "Carregando..."}
      );
  
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad VisualizarRespostaPage.name,'+'respostas');
  }

  confirma() {
    let alert = this._alertCtrl.create({
      title: 'Excluir Usuário',
      message: 'Você tem certeza que deseja excluir este usuário?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            alert.dismiss;
            this.excluir();
          }
        }
      ]
    });
    alert.present();
  }

  excluir(){
    this.load.present();
    console.log("http://localhost:3000//" + this.perguntas.id);
    this._http.delete("http://localhost:3000/pergunta_resposta/" + this.perguntas.id)
    .subscribe(
      (message) => {
        console.log(message);
        this.load.dismiss();
        this.alertFinal();
        this.conteudoAlert.mensagem = "Deletado";
        this.conteudoAlert.titulo = "Deletado com sucesso"
      },
      (err) => {
        console.log(err);
      }
    );
  }

  alertFinal() {
    let alert = this._alertCtrl.create({
      title: "Sucesso",
      subTitle: "Excluído com sucesso!",
      buttons: [
        {
          text: 'Fechar',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  // metodo que faz a chamada do componente para edição da pergunta ícone chave

  editar(){
    this.navCtrl.push(CadastroPerguntaPage.name, {
      perguntaSelecionada: this.perguntas
    });
  }

}

