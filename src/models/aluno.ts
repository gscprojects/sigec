//classe para criar modelos de objetos
export class Model {
    constructor(objeto?) {
        Object.assign(this, objeto);
    }
  }
  //classe usuario extendendo a classe Model
  export class Aluno extends Model {
      nome: string;
      email: string;
      cpf:string;
      endereco:string;
      estado:string;
      municipio:string;
      senha: string;
      tipo: string;

  }