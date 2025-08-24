import { Biblioteca } from './biblioteca.js';

// Cria instância biblioteca
const biblioteca = new Biblioteca();


// Adiciona autores
biblioteca.adicionarAutor("George Orwell", "Britânico", 1903);
biblioteca.adicionarAutor("J.R.R. Tolkien", "Britânico", 1892);
biblioteca.adicionarAutor("Stephen King", "Americano", 1947);
biblioteca.adicionarAutor("J.K. Rowling", "Britânico", 1965);
biblioteca.adicionarAutor("Suzanne Collins", "Americana", 1962);

// Adiciona livros
biblioteca.adicionarLivro("1984", "George Orwell", 1949, "Ficção Científica");
biblioteca.adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
biblioteca.adicionarLivro("A Esperança", "Suzanne Collins", 2010, "Ficção Científica");
biblioteca.adicionarLivro("O Iluminado", "Stephen King", 1977, "Terror");

// Adiciona usuários
biblioteca.adicionarUsuario("João Silva", "aluno");
biblioteca.adicionarUsuario("Maria Santos", "professor");
biblioteca.adicionarUsuario("Carlos Oliveira", "aluno");
biblioteca.adicionarUsuario("Ana Pereira", "professor");

// Testa exclusões 
console.log("Tenta excluir autor com livro cadastrado:");
biblioteca.excluirAutor("0003"); // Tenta excluir autor com livro cadastrado

console.log("Tenta excluir autor sem cadastro:");
biblioteca.excluirAutor("0008"); // Tenta excluir autor sem cadastro  

console.log("Exclui autor sem livro cadastrado.");
biblioteca.excluirAutor("0004"); // Exclui autor sem livro cadastrado

console.log("Tenta excluir livro sem cadastro:");
biblioteca.excluirLivro("0005"); // Tenta excluir livro sem cadastro

console.log("Exclui livro.");
biblioteca.excluirLivro("0004"); // Exclui livro

console.log("Tenta excluir usuário sem cadastro:");
biblioteca.excluirUsuario("0005");  // Tenta excluir usuário sem cadastro

console.log("Exclui usuário.");
biblioteca.excluirUsuario("0002");  // Exclui usuário


// Testa edições
console.log("Tenta editar autor sem cadastro:");
biblioteca.editarAutor("0008", "George Orwell", "Britânico", 1903); // Tenta editar autor sem cadastro

console.log("Edita autor.");
biblioteca.editarAutor("0001", "George Orwell editado", "Britânico", 1903); // Edita autor

console.log("Tenta editar livro sem cadastro:");
biblioteca.editarLivro("0008", "1984", "George Orwell editado", 1949, "Ficção Científica"); // Tenta editar livro sem cadastro  

console.log("Edita livro.");
biblioteca.editarLivro("0001", "1984 editado", "George Orwell editado", 1949, "Ficção Científica"); // Edita livro

console.log("Tenta editar usuário sem cadastro:");
biblioteca.editarUsuario("0008", "João Silva"); // Tenta editar usuário sem cadastro

console.log("Edita usuário.");
biblioteca.editarUsuario("0001", "João da Silva"); // Edita usuário

// Testa emprestimos
console.log("Tenta realizar empréstimo para usuário excluído:");
biblioteca.realizarEmprestimo("0002", "0002"); // Tenta realizar empréstimo para usuário excluído

console.log("Tenta realizar empréstimo para livro não disponível:");
biblioteca.realizarEmprestimo("0004", "0001"); // Tenta realizar empréstimo para livro não disponível

console.log("Realiza empréstimos.");
biblioteca.realizarEmprestimo("0001", "0003"); // Realiza empréstimo
biblioteca.realizarEmprestimo("0003", "0001"); // Realiza empréstimo

console.log("Tenta realizar empréstimo para livro já emprestado:");
biblioteca.realizarEmprestimo("0001", "0001"); // Tenta realizar empréstimo para livro já emprestado

console.log('Empréstimos ativos antes da devolução:', biblioteca.listarEmprestimosAtivos());

// Testa devoluções
console.log("Registra devolução.");
biblioteca.registrarDevolucao("0001");  // Registra devolução

console.log("Tenta registrar devolução de empréstimo não localizado:");
biblioteca.registrarDevolucao("0005");  // Tenta registrar devolução de empréstimo não localizado

// Imprime no log as ações realizadas anteriormente 
console.log('Autores:', biblioteca.autores);
console.log('Livros:', biblioteca.livros);
console.log('Usuários:', biblioteca.usuarios);
console.log('Empréstimos ativos:', biblioteca.listarEmprestimosAtivos());
console.log('Histórico de Empréstimos do Usuário 0001:', biblioteca.getHistoricoEmprestimos("0001"));
console.log('Histórico de Empréstimos do Usuário 0002:', biblioteca.getHistoricoEmprestimos("0002"));
console.log('Histórico de Empréstimos do Usuário 0004:', biblioteca.getHistoricoEmprestimos("0004"));