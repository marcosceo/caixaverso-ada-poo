import { Livro } from './livro.js';
import { Autor } from './autor.js';
import { Emprestimo } from './emprestimo.js';
import { UsuarioAluno } from './usuarioAluno.js';
import { UsuarioProfessor } from './usuarioProfessor.js';

export class Biblioteca {
  #usuarios = [];
  #livros = [];
  #autores = [];
  #emprestimos = [];

  adicionarUsuario(nome, tipoUsuario) {
    let usuario = '';

    if(tipoUsuario !== "aluno" && tipoUsuario !== "professor") {
      console.log("Tipo de usuário inválido! Usuários permitidos: aluno e professor.");
      return;
    }

    if (tipoUsuario === "aluno") {
      usuario = new UsuarioAluno(nome);
    } else {
      usuario = new UsuarioProfessor(nome);
    }
    this.#usuarios.push(usuario);
  }

  adicionarLivro(titulo, autor, anoPublicacao, genero) {
    const autorSelecionado = this.#autores.find(a => a.nome === autor);
    if (!autorSelecionado) {
        console.log("Autor não encontrado! Adicione o autor antes de adicionar o livro.");
        return;
    }
    const livro = new Livro(titulo, autorSelecionado, anoPublicacao, genero);
    this.#livros.push(livro);
  }

  adicionarAutor(nome, nacionalidade, anoNascimento) {
    const autor = new Autor(nome, nacionalidade, anoNascimento);
    this.#autores.push(autor);
  }

  excluirUsuario(usuarioId) {
    const usuarioIndex = this.#usuarios.findIndex(u => u.id === usuarioId);
    if (usuarioIndex === -1) {
      console.log("Usuário não encontrado.");
      return;
    }
    this.#usuarios.splice(usuarioIndex, 1);
  }

  excluirLivro(livroId) {
    const livroIndex = this.#livros.findIndex(l => l.id === livroId);
    if (livroIndex === -1) {
      console.log("Livro não encontrado.");
      return;
    }
    this.#livros.splice(livroIndex, 1);
  }

  excluirAutor(autorId) {
    const autorIndex = this.#autores.findIndex(a => a.id === autorId);
    if (autorIndex === -1) {
      console.log("Autor não encontrado.");
      return;
    }
    const livroIndex = this.#livros.findIndex(l => l.autor.id === autorId);
    if (livroIndex !== -1) {
      console.log("Não é possível excluir o autor, pois ele ainda possui livros cadastrados.");
      return;
    }
    this.#autores.splice(autorIndex, 1);
  }

  editarUsuario(usuarioId, nome) {
    const usuario = this.#usuarios.find(u => u.id === usuarioId);
    if (!usuario) {
      console.log("Usuário não encontrado.");
      return;
    }
    usuario.nome = nome;
  }

  editarLivro(livroId, titulo, autor, anoPublicacao, genero) {
    const autorSelecionado = this.#autores.find(a => a.nome === autor);
    if (!autorSelecionado) {
      console.log("Autor não encontrado!");
      return;
    }
    const livro = this.#livros.find(l => l.id === livroId);
    if (!livro) {
      console.log("Livro não encontrado.");
      return;
    }
    livro.titulo = titulo;
    livro.autor = autorSelecionado;
    livro.anoPublicacao = anoPublicacao;
    livro.genero = genero;
  }

  editarAutor(autorId, nome, nacionalidade, anoNascimento) {
    const autor = this.#autores.find(a => a.id === autorId);
    if (!autor) {
      console.log("Autor não encontrado.");
      return;
    }
    autor.nome = nome;
    autor.nacionalidade = nacionalidade;
    autor.anoNascimento = anoNascimento;
  }

  realizarEmprestimo(livroId, usuarioId) {
    const livro = this.#livros.find(l => l.id === livroId);
    const usuario = this.#usuarios.find(u => u.id === usuarioId);

    if (!livro || !usuario) {
      console.log("Livro ou usuário não encontrado.");
      return;
    }

    if (!livro.estaDisponivel()) {
      console.log("Livro não está disponível para empréstimo.");
      return;
    }

    const emprestimo = new Emprestimo(livro, usuario);
    this.#emprestimos.push(emprestimo);
    const emprestimoId = emprestimo.id;
    usuario.adicionarEmprestimo(emprestimoId);
    livro.disponivel = false;

    return emprestimo;
  }

  registrarDevolucao(emprestimoId) {
    const emprestimo = this.#emprestimos.find(e => e.id === emprestimoId);
    if (!emprestimo) {
      console.log("Empréstimo não encontrado.");
      return;
    }
    emprestimo.registrarDevolucao();
    const livro = emprestimo.livro;
    livro.disponivel = true;
  }

  listarEmprestimosAtivos() {
    const emprestimosAtivos = this.#emprestimos.filter(e => e.estaAtivo);
    if (emprestimosAtivos.length === 0) {
      return 'Não há empréstimos ativos!';
    }
    return emprestimosAtivos.map(e => e.toJSON());
  }

  get autores() {
    return this.#autores.map(autor => autor.toJSON());
  }

  get livros() {
    return this.#livros.map(livro => livro.toJSON());
  }

  get usuarios() {
    return this.#usuarios.map(usuario => usuario.toJSON());
  }

  getHistoricoEmprestimos(usuarioId) {
    const usuario = this.#usuarios.find(u => u.id === usuarioId);

    if (!usuario) {
      return 'Usuário não encontrado!';
    }

    const listaIdEmprestimos = usuario.historicoEmprestimos;
    let listaEmprestimos = [];
    listaEmprestimos = this.#emprestimos.filter(e => listaIdEmprestimos.includes(e.id));

    if (listaEmprestimos.length === 0) {
      return 'Este usuário ainda não possui emprestimos!';
    }
    return listaEmprestimos.map(emprestimo => emprestimo.toJSON());
  }
}
