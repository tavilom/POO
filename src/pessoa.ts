import { Aluno } from "./aluno";
import { Professor } from "./professor."; //há necessidade deste import??

export abstract class Pessoa {
  protected _nome: string = "";
  protected _cpf: string = "";
  protected _endereco: string = "";
  protected _estadoCivil = "";
  protected _vigor: number = 100;
  protected _cansaco: number = 0;
  protected _musculo: number = 100;
  

  constructor(nome: string, cpf: string, vigor: number ,cansaco: number, musculo: number)
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
  public get cansaco(): number {
    return this._cansaco;
  }

  public get musculo(): number {
    return this._musculo;
  }
}
