export abstract class Pessoa {
  constructor(
    protected _nome: string,
    private idade: number,
    private cpf: string,
    private genero: string,
    protected _forca: number,
    protected _forcaAtual: number,
    protected _cansaco: number,
    protected _peso: number,
    protected _intervalo: number
  ) {}

  //public abstract falar(pessoa: Pessoa): void;
  
  //public abstract correr(pessoa: Pessoa): void;
}
