# Projeto Caixaverso: Sistema de Gerenciamento de Biblioteca

Este repositório contém o código-fonte do **Caixaverso**, um sistema de gerenciamento de biblioteca desenvolvido como projeto final para a disciplina de Programação Orientada a Objetos.

## Sobre o Projeto

O Caixaverso foi desenvolvido para aplicar e demonstrar os conceitos fundamentais da Programação Orientada a Objetos (POO) em JavaScript. O sistema simula as operações rotineiras de uma biblioteca, como o cadastro de livros, o gerenciamento de usuários e o controle de empréstimos e devoluções.

---

## Pilares da Orientação a Objetos no Projeto

Este projeto foi estruturado com base nos quatro pilares da POO:

1.  **Abstração**: Entidades do domínio, como livros, autores e usuários, foram abstraídas em `Classes` que representam seus atributos e comportamentos essenciais.

2.  **Encapsulamento**: O estado interno dos objetos é protegido. Atributos privados, como `#id` e `#nome`, são acessados e modificados de forma controlada por meio de métodos públicos, garantindo a integridade dos dados.

3.  **Herança**: Foi implementada uma hierarquia de classes para usuários. A classe base `Usuario` define as características comuns, enquanto as classes derivadas `UsuarioAluno` e `UsuarioProfessor` herdam essas características e adicionam comportamentos específicos.

4.  **Polimorfismo**: O método `buscaPrazoDevolucao()` demonstra o polimorfismo ao se comportar de maneira distinta conforme o tipo de usuário. Isso permite que a classe `Emprestimo` calcule a data de devolução de forma consistente, sem a necessidade de conhecer os detalhes de implementação de cada subclasse de `Usuario`.

---

## Funcionalidades Implementadas

-   ✅ **Cadastro de Livros**: Criação de instâncias de `Livro` com título, autor, ano e gênero.
-   ✅ **Cadastro de Autores**: A classe `Autor` permite associar informações detalhadas a cada livro.
-   ✅ **Cadastro de Usuários**: Sistema de usuários com tipos diferentes (Aluno e Professor).
-   ✅ **Sistema de Empréstimo**:
    -   Associa um `Livro` a um `Usuario`.
    -   Define o livro como indisponível.
    -   Calcula a data de devolução automaticamente com base no tipo de usuário.
    -   Registra o empréstimo no histórico do usuário.
-   ✅ **Sistema de Devolução**: Permite registrar a devolução de um livro, tornando-o disponível novamente.
-   ✅ **IDs únicos**: Geração automática de IDs para todas as entidades, facilitando o controle.

---

## Estrutura das Classes

A arquitetura do sistema é composta pelas seguintes classes:

-   `Autor.js`: Representa o autor de um livro.
-   `Livro.js`: Representa um livro, com seus detalhes e status de disponibilidade.
-   `Usuario.js`: A classe base para todos os usuários da biblioteca.
-   `UsuarioAluno.js`: Uma especialização de `Usuario` com regras de empréstimo para alunos.
-   `UsuarioProfessor.js`: Outra especialização de `Usuario` com regras para professores.
-   `Emprestimo.js`: A classe que orquestra a relação entre um `Livro` e um `Usuario`, controlando o período do empréstimo.

---

## Como Executar

Este projeto foi construído com **Node.js** e utiliza **ES Modules**. Para ver o sistema em ação:

1.  Certifique-se de ter o Node.js instalado em sua máquina.
2.  O arquivo `main.js` serve como ponto de entrada e demonstração. Ele instancia a classe `Biblioteca` e executa diversas operações como cadastros, edições, exclusões, empréstimos e devoluções.
3.  Para executar o projeto, utilize o seguinte comando no seu terminal a partir da raiz do diretório:

```bash
node main.js
```

---

## Requisitos Extras

Como parte dos requisitos extras foi desenvolvida interface HTML de gestão da biblioteca.

Os dados são persistidos no navegador utilizando o localStorage.

Foram desenvolvidas as seguintes funcionalidades:   

- Cadastro e exclusão dos usuários, autores, livors e empréstimos.

- Exibição em tela dos usuários, autores, livros e emprestimos cadastrados.

- Validação para impedir o emprestimo de livro já emprestado.

A página pode ser acessada pelo link https://biblioteca-js.vercel.app/. 

---