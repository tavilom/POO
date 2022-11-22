import { Professor } from "./professor";
import { Aluno } from "./aluno"

export class Academia {
  private static academia: Academia;
  private readonly professores: Professor[] = []
  private readonly alunos: Aluno[] = []

  private constructor(
    private _nome: string,
    private _cnpj: string
  ) {}

  static getAcademia(nome: string, cnpj: string) {
    if (Academia.academia) return Academia.academia
    Academia.academia = new Academia(nome, cnpj)
    
    return Academia.academia;
  }

  inserirProfessor(...professores: Professor[]): void {
    for (const professor of professores) {
      this.professores.push(professor)
    }
  }

  listarProfessores(): number {
    return this.professores.length
  }

  inserirAluno(...alunos: Aluno[]): void {
    for (const aluno of alunos) {
      this.alunos.push(aluno)
    }
  }

  listarAlunos(): number {
    return this.alunos.length
  }

  dadosAcademia() {
    const dados = `Dados da academia:
    nome: ${this._nome};
    número de professores: ${academia.listarProfessores()};
    número de alunos: ${academia.listarAlunos()};
    CNPJ: ${this._cnpj};
    `
    return dados
  }
}

const academia = Academia.getAcademia('Gold Gym', '12.123.123/0001-12')
const professor = new Professor('Angelo', 30, '123.123.123-12', 'masculino')

academia.inserirProfessor(professor)

console.log(academia.dadosAcademia());