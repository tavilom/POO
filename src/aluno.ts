import {Pessoa} from './pessoa'
import { Util } from './util';

export abstract class Aluno extends Pessoa {
  constructor(nome: string, cpf: string) {
    super(nome + "aluno", cpf + "123.456.789-12", 100, 0, 100)
    this._vigor = this._cansaco
  }
  protected _turma!: String;

  public falar(): void {
    console.log(`${this._nome} Bom dia! Estou pronto para o treinamento de hoje.`);
  }

  public correr(aluno: Pessoa): void{
    this._vigor -= Math.random() / 100;
    this._cansaco += Math.random() * 10;
     if(this._cansaco >= this._vigor) {
      console.error("Você passou mal!");
      ;
     } else {
      if (this._vigor > this._cansaco) {
        console.log("Cardio completo!");
      }
     }
  }

  public perna(aluno: Pessoa): void {
    this._vigor -= Math.random() / 100;
    this._cansaco += Math.random() * 10;
    this._musculo -= Math.random() * 10;
    if(this._cansaco >= this._vigor) {
      console.error("Você passou mal!");
    } else if (this._musculo <= 10) {
      console.error("Você se machucou");
    } else {
      console.log("Treino de perna completo!");
    }  
  }

  public peito(aluno: Pessoa): void {
    this._vigor -= Math.random() / 100;
    this._cansaco += Math.random() * 10;
    this._musculo -= Math.random() * 10;
    if(this._cansaco >= this._vigor) {
      console.error("Você passou mal!");
    } else if (this._musculo <= 10) {
      console.error("Você se machucou");
    } else {
      console.log("Treino de peito completo!");
    }  
  }

}
