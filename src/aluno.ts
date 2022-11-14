import {Pessoa} from './pessoa'

export abstract class Aluno extends Pessoa {
  constructor(nome: string, cpf: string) {
    super(nome + "aluno", cpf + "123.456.789-12")
  }
  protected _turma!: String;
}

public get falar()