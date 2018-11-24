/** CRIADO POR COLISBERTO */

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Pergunta} from  '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';
import { Resposta } from '../../modules/resposta';
import { CadastroDescricaoRespostaPage } from '../cadastro-descricao-resposta/cadastro-descricao-resposta';

/**
 * Generated class for the CadastroPerguntaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-pergunta',
  templateUrl: 'cadastro-pergunta.html',
})
export class CadastroPerguntaPage {

    public resposta:Resposta;

  private orderForm;
 
  public pergunta: Pergunta;
  public respostas: Resposta;
  private error = { condicao: false, message:''};
  private success = { condicao: false, message: ''};


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    
    ) 
      {

        this.pergunta = new Pergunta();
        this.respostas = new Resposta();
   
      this.respostas = this.navParams.get('respostaSelecionada');
    
      }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPerguntaPage');
  }

 
  ionViewWillEnter() {
    this.resposta = new Resposta;
   
    
  if(this.navParams.get('userBack')){
      /** obtenho o parâmetro por meio do método get e inserio na lista pelo método push */
      
      var aux= this.navParams.get('userBack');
     
      this.resposta.descricao = aux.descricao;
      this.resposta.condicao = aux.descricao;
      this.pergunta.respostas.push( this.resposta);
      console.log(this.pergunta);
    }
  }

cadastroDescricaoOpA(){

  for (var i = 0;i<5;i++){
    if(this.pergunta.respostas[i].label =="A"){

  console.log("entrou no if")
  
    
  console.log("entrou no for"+i);
 
  this.navCtrl.push(CadastroDescricaoRespostaPage.name,{teste:this.pergunta.respostas[i]});
}
  }else{

 this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada: this.resposta });
  console.log("entrou else")
}

}

cadastroDescricaoOpB(){
  
  this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada: this.resposta });
  
}

cadastroDescricaoOpC(){
 
  this.navCtrl.push(CadastroDescricaoRespostaPage.name, {respostaSelecionada: this.resposta});
 
}

cadastroDescricaoOpD(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name, {respostaSelecionada: this.resposta});
  
}

cadastroDescricaoOpE(){
  this.navCtrl.push(CadastroDescricaoRespostaPage.name, {respostaSelecionada: this.resposta});
 
}

validarDados(){
  
}

verficaSalvarEditar(){
  this.error.condicao = false;
    this.validarDados();
    
    if(!this.error.condicao){
      
      if(this.pergunta.id){
        this.editar();
        }
        else{
          this.salvar();
        }
    }
}

salvar(){
  this.http.post("http://localhost:3000/pergunta_resposta", 
    this.pergunta
      ).subscribe(res => {
        // console.log(res);
        this.error.condicao = false;
        this.error.message = '';
        this.success.condicao = true;
        this.success.message = "Criado com sucesso"
        this.navCtrl.pop();
      }, (err) => {
        console.log(err);
      });
}

editar(){

}

}


 