export class Emprestimo {
  static nextId = 1;
  #id = '';
  #livro;
  #usuario;
  #dataEmprestimo;
  #dataDevolucao;
  #estaAtivo = true;

  constructor(livro, usuario) {
    this.#livro = livro;
    this.#usuario = usuario;
    this.#dataEmprestimo = new Date();
    this.#dataDevolucao = this.buscarDataDevolucao();
    this.#id = String(Emprestimo.nextId++).padStart(4, '0');
  }

  buscarDataDevolucao() {
    const prazo = this.usuario.buscaPrazoDevolucao(this.dataEmprestimo);
    return prazo;
  }

  get estaAtivo() {
    return this.#estaAtivo;
  }

  get id() {
    return this.#id;
  }

  get livro() {
    return this.#livro;
  }

  get usuario() {
    return this.#usuario;
  }

  get dataEmprestimo() {
    return this.#dataEmprestimo;
  }

  get dataDevolucao() {
    return this.#dataDevolucao;
  }

  registrarDevolucao(emprestimoId) {
    if(!this.#estaAtivo) {
      return 'Empréstimo já foi devolvido.';
    }
    this.#estaAtivo = false;
  }

  toJSON() {
    return {
      id: this.id,
      livro: this.livro.titulo,
      usuario: this.usuario.nome,
      dataEmprestimo: this.dataEmprestimo,
      dataDevolucao: this.dataDevolucao,
      estaAtivo: this.estaAtivo
    };
  }
}
