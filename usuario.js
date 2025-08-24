export class Usuario {  
  static nextId = 1;
  #id = '';
  #nome = '';
  #historicoEmprestimos = []; // Array com os IDs dos empréstimos

  constructor(nome) {
    this.#nome = nome;
    this.#id = String(Usuario.nextId++).padStart(4, '0');
  }

  get id() {
    return this.#id;
  }

  get nome() {
    return this.#nome;
  }   

  buscaPrazoDevolucao(dataEmprestimo) {
    const prazo = new Date(dataEmprestimo);
    prazo.setDate(prazo.getDate() + 7);
    return prazo;
  }

  get historicoEmprestimos() {
    return this.#historicoEmprestimos;
  }

  set nome(novoNome) {
    this.#nome = novoNome;
  }

  adicionarEmprestimo(emprestimoId) {
    this.#historicoEmprestimos.push(emprestimoId);
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome
    };
  } 
}
