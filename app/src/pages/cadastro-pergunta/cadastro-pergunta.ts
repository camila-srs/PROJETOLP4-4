import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Pergunta} from  '../../modules/pergunta';
import { HttpClient } from '@angular/common/http';
import { Resposta } from '../../modules/resposta';
import { CadastroDescricaoRespostaPage } from '../cadastro-descricao-resposta/cadastro-descricao-resposta';
import { HomePage } from '../home/home';

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
    public aux:number=0;
    public aux2:boolean=false;
    
    load;
  private orderForm;
 
  public pergunta: Pergunta;
  public respostas: Resposta;
  private error = { condicao: false, message:''};
  private success = { condicao: false, message: ''};


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private _alertCtrl: AlertController,
    private _loadCtr: LoadingController
    ) 
      {

        
        this.pergunta = this.navParams.get('perguntaSelecionada');
        this.respostas = new Resposta;
        if(this.pergunta){
          this.load = _loadCtr.create(
            {content: "Carregando..."}
          );
         this.aux = 5;
      }else{
        this.pergunta = new Pergunta();
        
    
      }
    
      }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPerguntaPage');
  }

 
  ionViewWillEnter() {
    this.resposta = new Resposta;
    console.log(this.pergunta);
    console.log(this.aux)
  if(this.navParams.get('userBack')){
      /** obtenho o parâmetro por meio do método get e inserio na lista pelo método push */
      
      var teste= this.navParams.get('userBack');
     this.resposta.label = teste.label;
      this.resposta.descricao = teste.descricao;
      this.resposta.condicao = teste.condicao;
     this.virificarTamanho();
      if(!this.validarRespota(this.resposta)){
      this.pergunta.respostas.push( this.resposta);
      console.log(this.pergunta);
      }
      
    }
  }


  validarRespota(as:Resposta):boolean{
      if(this.aux2){
      for(var i = 0 ; i<5; i++){
      if(as.label === 'a'){
        this.pergunta.respostas[i].label=this.resposta.label;
        this.pergunta.respostas[i].descricao = this.resposta.descricao;
        this.pergunta.respostas[i].condicao = this.resposta.condicao;
        return true;
      }else{
        if(as.label === 'b'){
          this.pergunta.respostas[i].label=this.resposta.label
          this.pergunta.respostas[i].descricao = this.resposta.descricao;
          this.pergunta.respostas[i].condicao = this.resposta.condicao;
          return true;
      }else{
        if(as.label === 'c'){
          this.pergunta.respostas[i].label=this.resposta.label
          this.pergunta.respostas[i].descricao = this.resposta.descricao;
          this.pergunta.respostas[i].condicao = this.resposta.condicao;
        return true;
    }else{
      if(as.label === 'd'){
        this.pergunta.respostas[i].label=this.resposta.label
        this.pergunta.respostas[i].descricao = this.resposta.descricao;
        this.pergunta.respostas[i].condicao = this.resposta.condicao;
        return true;
    }else{
      if(as.label === 'e'){
        this.pergunta.respostas[i].label=this.resposta.label
        this.pergunta.respostas[i].descricao = this.resposta.descricao;
        this.pergunta.respostas[i].condicao = this.resposta.condicao;
        return true;
    }
    }
  }
    }
  }

  }


}else{
  return false;
}
  }
  
  virificarTamanho(){
    if(this.pergunta.respostas.length<1){
      this.aux = 1;
    
    }else{
      if(this.pergunta.respostas.length<2){
        this.aux = 2;
        
      }else{
        if(this.pergunta.respostas.length<3){
          this.aux = 3;
          
        }else{
          if(this.pergunta.respostas.length<4){
            this.aux = 4;
           
          }

    }

  }
}
  }



cadastroDescricaoOpA(){
  
  console.log(this.aux);


    if(!this.pergunta.respostas[0]){
    this.respostas.label="a"
    this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada:this.respostas });
     this.aux2= false;  
  }else{
    if(this.pergunta.respostas[0].label === 'a'){
      this.navCtrl.push(CadastroDescricaoRespostaPage.name,{respostaSelecionada:this.pergunta.respostas[0]});
      this.aux2 = true;
      return;


    
    }
}
}
    

cadastroDescricaoOpB(){

  this.respostas = new Resposta;
  if(!this.pergunta.respostas[1]){
    this.respostas.label="b"
    this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada:this.respostas });
     this.aux2= false;  
  }else{
    if(this.pergunta.respostas[1].label === 'b'){
      this.aux2= true;  
      this.navCtrl.push(CadastroDescricaoRespostaPage.name,{respostaSelecionada:this.pergunta.respostas[1]});
      return;

    
    }
}
}


cadastroDescricaoOpC(){
  this.respostas = new Resposta;
  if(!this.pergunta.respostas[2]){
    this.respostas.label="c"
    this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada:this.respostas });
     this.aux2= false;  
  }else{
    if(this.pergunta.respostas[2].label === 'c'){
      this.aux2= true;  
      this.navCtrl.push(CadastroDescricaoRespostaPage.name,{respostaSelecionada:this.pergunta.respostas[2]});
      return;

    
    }
}
}


cadastroDescricaoOpD(){
  this.respostas = new Resposta;
  if(!this.pergunta.respostas[3]){
  this.respostas.label="d"
  this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada:this.respostas });
  }else{
    if(this.pergunta.respostas[3].label === 'd'){
    this.navCtrl.push(CadastroDescricaoRespostaPage.name,{respostaSelecionada:this.pergunta.respostas[3]});
    return;

  }

}
}

cadastroDescricaoOpE(){
  this.respostas = new Resposta;
  if(!this.pergunta.respostas[4]){
    this.respostas.label="e"
    this.navCtrl.push(CadastroDescricaoRespostaPage.name,{ respostaSelecionada: this.respostas });
}
  else{
    if(this.pergunta.respostas[4].label === 'e'){
      this.navCtrl.push(CadastroDescricaoRespostaPage.name,{respostaSelecionada:this.pergunta.respostas[4]});

      return;

    }
  }
}
 




verficaSalvarEditar(){
  this.error.condicao = false;
    this.validarDados();
    
    if(!this.error.condicao){
      
      if(this.pergunta){
        this.editar();
        }
        else{
          this.salvar();
        }
    }
}

validarDados(){

  if(!this.pergunta.categoria){
    this.error.condicao = true;
    this.error.message = "Categoria, campo obrigatório!";
  }
  if(!this.pergunta.pergunta){
    this.error.condicao = true;
    this.error.message = "Pergunta, campo obrigatório!";
  }

 

  
}

salvar(){
  this.pergunta.id=null;
  this.http.post("http://localhost:3000/pergunta_resposta/", 
    this.pergunta
      ).subscribe(res => {
        console.log(res);
        this.error.condicao = false;
        this.error.message = '';
        this.success.condicao = true;
        this.success.message = "Criado com sucesso";
        this.navCtrl.pop();
      }, (err) => {
        console.log(err);
      });
}

/* Método está de edição pergunta-resposra: Obs: Está editando a String da pergunta, 
  String resposta e a primeira opção da questão, (A)*/


editar(){
  this.error.condicao = false;
  this.validarDados();
  console.log(this.error.condicao,this.pergunta);
  
  if(!this.error.condicao){
    //this.pergunta = this.pergunta;
    this.resposta.descricao = this.resposta.descricao;

    this.http.put("http://localhost:3000/pergunta_resposta/"+this.pergunta.id,this.pergunta)
   
      .subscribe(res => {
        console.log(res);
        this.error.condicao = false;
        this.error.message = '';
        this.success.condicao = true;
        this.success.message = "TESTE "

       
        
      }, (err) => {
        console.log(err);
      });

  }
}

}


 