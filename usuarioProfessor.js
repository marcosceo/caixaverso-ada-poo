import { Usuario } from './usuario.js';

export class UsuarioProfessor extends Usuario {
  #registro = '';
  constructor(nome) {
    super(nome);
    this.#registro = this.gerarRegistro();
  }

  buscaPrazoDevolucao(dataEmprestimo) {
    const prazo = new Date(dataEmprestimo);
    prazo.setDate(prazo.getDate() + 14);
    return prazo;
  }

  gerarRegistro() {
    const nomeProfessor = this.nome;
    const numero = Math.floor(Math.random() * 10000);
    return `${nomeProfessor}${numero}`;
  }

  get registro() {
    return this.#registro;
  }
}
