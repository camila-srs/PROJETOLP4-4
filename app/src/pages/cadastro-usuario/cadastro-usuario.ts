import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Usuario } from '../../modules/usuario';
import { HttpClient } from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html',
})
export class CadastroUsuarioPage {
 

  private orderForm;
  public usuario: Usuario;
  private senha: string;
  private senha_confirma:string;
  private error = { condicao: false, message:''};
  private success = { condicao: false, message: ''};
  load;
  botaoEditar:boolean;
  botaoSalvar:boolean;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _http: HttpClient,
    private _alertCtrl: AlertController,
    private _loadCtr: LoadingController,

  ) {
    this.usuario = this.navParams.get('usuarioSelecionado');
    if(this.usuario){
      this.load = _loadCtr.create(
        {content: "Carregando..."}
      );
      this.botaoEditar = true;
  }else{
    this.botaoSalvar = true;
    this.usuario = new Usuario;
    

  }
  }
 
 

  editar(){
    this.error.condicao = false;
    this.validarDados();
    console.log(this.error.condicao,this.usuario);
    
    if(!this.error.condicao){
      this.usuario.senha = this.senha;

      this._http.put("http://localhost:3000/usuario/"+this.usuario.id,this.usuario)
     
        .subscribe(res => {
          console.log(res);
          this.error.condicao = false;
          this.error.message = '';
          this.success.condicao = true;
          this.success.message = "Criado com sucesso"

         
          
        }, (err) => {
          console.log(err);
        });

    }
  }
  
  
    salvar(){
      this.error.condicao = false;
      this.validarDados();
      console.log(this.error.condicao);
      
      if(!this.error.condicao){
        this.usuario.senha = this.senha;
  
        this._http.post("http://localhost:3000/usuario/", 
        this.usuario
          ).subscribe(res => {
            console.log(res);
            this.error.condicao = false;
            this.error.message = '';
            this.success.condicao = true;
            this.success.message = "Criado com sucesso"
  
            this.navCtrl.push(CadastroUsuarioPage.name)
            
          }, (err) => {
            console.log(err);
          });
  
      }
    }

  
  validarDados(){
    if(!this.usuario.nome){
      this.error.condicao = true;
      this.error.message = "Nome, campo obrigatório!";
    }

    if(!this.usuario.email){
      this.error.condicao = true;
      this.error.message = "Email, campo obrigatório!";
    }

    if(!this.senha || !this.senha_confirma){
      this.error.condicao = true;
      this.error.message = "Senha e confirma senha, campos obrigatórios!";
    }

    if(this.senha !== this.senha_confirma){
      this.error.condicao = true;
      this.error.message = "Senha e confirma senha devem ser iguais";
    }

    if(!this.usuario.perfil){
      this.error.condicao = true;
      this.error.message = "Perfil, campo obrigatório!";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroUsuarioPage');
  }
 
 
}