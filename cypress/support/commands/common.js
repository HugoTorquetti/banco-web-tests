Cypress.Commands.add('validarToast', (mensagemEsperada) => {
    cy.get('.toast')
        .should('be.visible')
        .should('have.text', mensagemEsperada);
});

Cypress.Commands.add('selecionarElementoComboBox', (elemento, valor) => {
    cy.get(`label[for="${elemento}"]`).parent().as(`campo-${elemento}`);
        cy.get(`@campo-${elemento}`).click();
        cy.get(`@campo-${elemento}`).contains(valor).click();
});