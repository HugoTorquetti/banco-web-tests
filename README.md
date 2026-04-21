# banco-web-tests

Projeto de testes automatizados com Cypress e JavaScript

## Objetivo

Este projeto foi desenvolvido durante a Mentoria 2.0 com o objetivo de aprender e praticar automação de testes utilizando Cypress. O foco está em criar uma estrutura organizada, utilizando Custom Commands para facilitar a manutenção e reutilização de código.

## Componentes do Projeto

- **Cypress**: Framework de automação de testes end-to-end.
- **Custom Commands**: Comandos personalizados para reutilização de lógicas comuns nos testes.
- **cypress-mochawesome-reporter**: Geração de relatórios detalhados em HTML dos testes executados.
- **Estrutura de pastas:**
  - `cypress/e2e/`: Scripts de testes automatizados (`login.cy.js`, `transferencia.cy.js`).
  - `cypress/fixtures/`: Dados de apoio para os testes (ex: credenciais).
  - `cypress/support/commands/`: Implementação dos Custom Commands (`common.js`, `login.js`, `transferencia.js`).
  - `cypress/reports/`: Relatórios gerados após execução dos testes.

## Pré-requisitos

- Node.js instalado
- API em execução: [banco-api](https://github.com/juliodelimas/banco-api)
- Aplicação web em execução: [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/HugoTorquetti/banco-web-tests.git
   cd banco-web-tests
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```

## Execução dos Testes

1. Certifique-se de que a API e a aplicação web estejam rodando.
2. Execute os testes em modo headless:
   ```bash
   npm test
   ```
   Ou execute com interface gráfica:
   ```bash
   npm run cy
   ```
3. Após a execução, acesse o relatório em `cypress/reports/html/index.html`.

## Estrutura dos Testes

- **login.cy.js**: Testes relacionados ao login de usuários.
- **transferencia.cy.js**: Testes de transferência entre contas.

## Custom Commands

Os comandos personalizados estão organizados em:
- `cypress/support/commands/common.js`: Comandos utilitários gerais.
- `cypress/support/commands/login.js`: Comandos para automação do login.
- `cypress/support/commands/transferencia.js`: Comandos para automação de transferências.

Estes comandos são importados em `cypress/support/commands.js` e facilitam a escrita dos testes, promovendo reutilização e clareza.

## Relatórios

Os relatórios são gerados automaticamente após a execução dos testes, utilizando o `cypress-mochawesome-reporter`. O relatório em HTML pode ser acessado em `cypress/reports/html/index.html`.

---

Sinta-se à vontade para contribuir ou adaptar este projeto para seus estudos!