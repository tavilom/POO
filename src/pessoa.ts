import { Aluno } from "./aluno";
import { Professor } from "./professor.";

export abstract class Pessoa {
  protected _nome: string = "";
  protected _cpf: string = "";
  protected _endereco: string = "";
  protected _estadoCivil = "";
  public _cancaco: number = 0;

  constructor(nome: string, cpf: string, cancaco: number)
   {}

  public falar(aluno: Pessoa): void {
    console.log(`${this._nome} Cheguei para meu treino Professor `)
  }

  public get cpf(): string {
    return this._cpf
  } 
  public get nome(): string {
    return this._nome;
  }

  public get cancaco(): number {
    return this._cancaco;
  }
}

