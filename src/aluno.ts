import {Pessoa} from './pessoa'
import { Util } from './util';

export abstract class Aluno extends Pessoa {
  constructor(nome: string, cpf: string) {
    super(nome + "aluno", cpf + "123.456.789-12", 100, 0)
    this._vigor = this._cancaco
  }
  protected _turma!: String;

  public falar(): void {
    console.log(`${this._nome} Bom dia! Estou pronto para o treinamento de hoje.`);
  }

  public correr(aluno: Pessoa): void{
    this._vigor -= Math.random();
    this._cancaco += Math.random();
     if(this._cancaco > this._vigor) {
      console.log("Você passou mal");
     } else {
      if (this._vigor > this._cancaco) {
        console.log("Cardio completo!");
      }
     }
  }

  public perna(aluno: Pessoa): void {

      
  }

}
