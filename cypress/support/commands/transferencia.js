Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor, token) => {
    cy.selecionarElementoComboBox('conta-origem', contaOrigem);
    cy.selecionarElementoComboBox('conta-destino', contaDestino);
    cy.get('#valor').click().type(valor);
    if (token) {
        cy.get('#token').click().type(token);
    }
    cy.contains('button', 'Transferir').click();
});