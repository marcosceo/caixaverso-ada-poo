export class Autor {
  static nextId = 1;
  #id = '';
  #nome = '';
  #nacionalidade = '';
  #anoNascimento = 0;

  constructor(nome, nacionalidade, anoNascimento) {
    this.#nome = nome;
    this.#nacionalidade = nacionalidade;
    this.#anoNascimento = anoNascimento;
    this.#id = String(Autor.nextId++).padStart(4, '0');
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }

  get nacionalidade() {
    return this.#nacionalidade;
  }

  get anoNascimento() {
    return this.#anoNascimento;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  set nacionalidade(novaNacionalidade) {
    this.#nacionalidade = novaNacionalidade;
  } 

  set anoNascimento(novoAno) {
    this.#anoNascimento = novoAno;
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      nacionalidade: this.nacionalidade,
      anoNascimento: this.anoNascimento
    };
  }
}
