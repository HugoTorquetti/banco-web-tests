describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fazerLoginComCredenciaisValidas();
    });
    
    it('Deve transferir quando informo dados e valor válidos', () => {
        // Act
        cy.realizarTransferencia('Heloisa', 'Hugo', '11');

        // Assert
        cy.validarToast('Transferência realizada!');

    });

    it('Deve apresentar erro quando tentar transferir valor acima de 5 mil e não informar token', () => {
        // Act
        cy.realizarTransferencia('Heloisa', 'Hugo', '5000.01');

        // Assert
        cy.validarToast('Autenticação necessária para transferências acima de R$5.000,00.');

    });
});