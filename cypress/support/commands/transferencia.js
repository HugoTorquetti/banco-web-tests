Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
    cy.selecionarElementoComboBox('conta-origem', contaOrigem);
    cy.selecionarElementoComboBox('conta-destino', contaDestino);
    cy.get('#valor').click().type(valor);
    cy.contains('button', 'Transferir').click();
});