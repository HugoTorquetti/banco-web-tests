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

    it('Deve apresentar erro quando tentar transferir valor abaixo de 10', () => {
        // Act
        cy.realizarTransferencia('Heloisa', 'Hugo', '9.99');

        // Assert
        cy.validarToast('O valor da transferência deve ser maior ou igual a R$10,00.');

    });

    it('Deve transferir quando informo valor acima de 5000 e token válido', () => {
        // Act
        cy.realizarTransferencia('Heloisa', 'Hugo', '5000.01', '123456');

        // Assert
        cy.validarToast('Transferência realizada!');
    });

    it('Deve apresentar erro quando tentar transferir valor acima de 5 mil e não informar token', () => {
        // Act
        cy.realizarTransferencia('Heloisa', 'Hugo', '5000.01');

        // Assert
        cy.validarToast('Autenticação necessária para transferências acima de R$5.000,00.');

    });

    it('Deve apresentar erro quando tentar transferir valor acima de 5 mil e informar token inválido', () => {
        // Act
        cy.realizarTransferencia('Heloisa', 'Hugo', '5000.01', '654321');

        // Assert
        cy.validarToast('Autenticação necessária para transferências acima de R$5.000,00.');

    });
});