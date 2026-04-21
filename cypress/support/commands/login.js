Cypress.Commands.add('fazerLoginComCredenciaisValidas', () => {
     cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username')   //quando temos comandos muito complexos e que se extendem muito na mesma linha
        .click()            //passando de 80 caracteres, é recomendado quebrar a linha para melhorar a 
        .type(credenciais.valida.usuario) 
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.contains('button', 'Entrar').click()
});

Cypress.Commands.add('fazerLoginComCredenciaisInvalidas', () => {
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario) 
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
});

Cypress.Commands.add('fazerLoginComCredenciaisAusentes', () => {
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.ausente.usuario) 
      cy.get('#senha').click().type(credenciais.ausente.senha)
    });
    cy.contains('button', 'Entrar').click()
  });  