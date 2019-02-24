
//BIBLIOTECAS NECESSARIAS PARA O ARQUIVO
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Aluno } from '../../models/aluno';

// CLASSE PROVIDER QUE CHAMA O WEB SERVICE REST PARA AUTENTICAO
@Injectable()
export class AuthProvider {

    // CAMINHO MAPEADO NO PROXY ionic.config.json
    private url = '/autenticar?';
  
      // CONSTRUTOR DA CLASSE COM PARAMETROS NECESSARIOS PARA EXECUTAR OS METODOS
    constructor(private http: HttpClient) {
    }

    
    // METODOS QUE CHAMAR O WEB SERVICE REST EM JAVA
    efetuarLogin(usuario: Aluno) {

      // RETORNA PARA login.ts O ARQUIVO JSON RETORNADO NO WEBSERVICE
        return new Promise(resolve => {
          
          // CABECALHO PARA CHAMADAS DO WEBSERVICE REST
          var headers= new HttpHeaders();
             headers.append('Access-Control-Allow-Origin' , '*');
             headers.append('Access-Control-Allow-Origin' , '*');
             headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
             headers.append('Accept','application/json');
             headers.append('content-type','application/json')
           
           // CHAMADA PARA WEB SERVICE REST QUE AUTENTICA O USUARIO
           // PARAMETROS DE ENTRADA EMAIL E SENHA
           // RETORNO -  ARQUIVO JSON COM INFOs DO USUARIO AUNTENTICADO  
          this.http.get(this.url+'email='+ usuario.email+'&senha='+ usuario.senha, {headers:headers})
                   .map(res => res)
                   .subscribe(data => {
                    resolve(data);
            
                 
      
          // EM CASO DE ERRO NA EXECUCAO DO SERVICO PRINTA NO CONSOLE O ERRO
          }, err => {
            
            console.log(err);
          
          });
        });
    }

}