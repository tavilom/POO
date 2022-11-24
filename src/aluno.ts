import {Pessoa} from './pessoa'
import { Util } from './util';


export class Aluno extends Pessoa {
  constructor(
    nome: string,
    idade: number,
    cpf: string,
    genero: string,
    

  ) {
  super(nome, idade, cpf, genero, 100, 100, 0, 100, 0)
  }


  public falar(): void {
    console.log(`${this._nome} Bom dia! Estou pronto para o treinamento de hoje.`);
  }

  public correr(aluno: Pessoa): void{
        this._forcaAtual -= Math.random() / 0.05;
        this._cansaco += Math.random() * 0.05;
         if(this._cansaco >= this._forcaAtual) {
          console.error("Você passou mal!");
          ;
         } else {
          if (this._forcaAtual > this._cansaco) {
            console.log("Cardio completo!");
          } 
      } 
}

public malharPerna(): void{
  const certo = this._forcaAtual > this._peso;
  if(certo) {
    const perdaforca: number =  (this._forcaAtual / 0.05 && this._cansaco / 0.02)
    console.log(`Status atula do aluno: ${perdaforca}`);
  } else {
    throw new Error(`${this._nome} se machucou e teve que ir para casa`);
  }
}

public malharPeito(): void{
  const certo = this._forcaAtual > this._peso;
  if(certo) {
    const perdaforca: number =  (this._forcaAtual / 0.05 && this._cansaco / 0.02)
    console.log(`Status atula do aluno: ${perdaforca}`);
  } else {
    throw new Error(`${this._nome} se machucou e teve que ir para casa`);
  }
}
public malharOmbro(): void{
  const certo = this._forcaAtual > this._peso;
  if(certo) {
    const perdaforca: number =  (this._forcaAtual / 0.05 && this._cansaco / 0.02)
    console.log(`Status atula do aluno: ${perdaforca}`);
  } else {
    throw new Error(`${this._nome} se machucou e teve que ir para casa`);
  }
}

public intervalo(): void{
  this._forcaAtual += this._forcaAtual * 1.05;
  if (this._forcaAtual > this._forca) {
    this._forcaAtual = this._forca
  }
}


}

// //aqui pra baixo é tudo comentario
// export abstract class Aluno extends Pessoa {
//   constructor(nome: string, cpf: string) {
//     super(nome + "aluno", cpf + "123.456.789-12", 100, 0, 100)
//     this._vigor = this._cansaco
//   }
//   protected _turma!: String;


//   public correr(aluno: Pessoa): void{
//     this._vigor -= Math.random() / 100;
//     this._cansaco += Math.random() * 10;
//      if(this._cansaco >= this._vigor) {
//       console.error("Você passou mal!");
//       ;
//      } else {
//       if (this._vigor > this._cansaco) {
//         console.log("Cardio completo!");
//       }
//      }
//   }

//   public perna(aluno: Pessoa): void {
//     this._vigor -= Math.random() / 100;
//     this._cansaco += Math.random() * 10;
//     this._musculo -= Math.random() * 10;
//     if(this._cansaco >= this._vigor) {
//       console.error("Você passou mal!");
//     } else if (this._musculo <= 10) {
//       console.error("Você se machucou");
//     } else {
//       console.log("Treino de perna completo!");
//     }  
//   }

//   public peito(aluno: Pessoa): void {
//     this._vigor -= Math.random() / 100;
//     this._cansaco += Math.random() * 10;
//     this._musculo -= Math.random() * 10;
//     if(this._cansaco >= this._vigor) {
//       console.error("Você passou mal!");
//     } else if (this._musculo <= 10) {
//       console.error("Você se machucou");
//     } else {
//       console.log("Treino de peito completo!");
//     }  
//   }

// }

