import { Aluno } from "./aluno";
import { Professor } from "./professor.";

export abstract class Pessoa {
  protected _nome: string = "";
  protected _cpf: string = "";
  protected _endereco: string = "";
  protected _estadoCivil = "";
  protected _vigor: number = 100;
  protected _cancaco: number = 0;
  

  constructor(nome: string, cpf: string, vigor: number ,cancaco: number)
   {}

  public abstract falar(pessoa: Pessoa): void;

  public abstract correr(pessoa: Pessoa): void;

  public abstract perna(pessoa: Pessoa): void;

  public get cpf(): string {
    return this._cpf
  } 
  public get nome(): string {
    return this._nome;
  }
  public get vigor(): number {
    return this._vigor;
  }
  public get cancaco(): number {
    return this._cancaco;
  }
}

