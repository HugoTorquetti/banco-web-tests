describe('Transferências', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('credenciais').then((credenciais) => {
            cy.get('#username')   //quando temos comandos muito complexos e que se extendem muito na mesma linha
                .click()            //passando de 80 caracteres, é recomendado quebrar a linha para melhorar a 
                .type(credenciais.valida.usuario) 
            cy.get('#senha').click().type(credenciais.valida.senha)
        });
        cy.get('#login-section > .btn').click();
    });
    
    it('Deve transferir quando informo dados e valor válidos', () => {
        cy.get('label[for=conta-origem]').parent().as('campo-conta-origem');
        cy.get('@campo-conta-origem').click();
        cy.get('@campo-conta-origem').contains('Heloisa').click();

        cy.get('label[for=conta-destino]').parent().as('campo-conta-destino');
        cy.get('@campo-conta-destino').click();
        cy.get('@campo-conta-destino').contains('Hugo').click();

        cy.get('#valor').click().type('5200');
        cy.get('#token').click().type('123456');
        cy.contains('button', 'Transferir').click();
        cy.get('.toast')
            .should('be.visible')
            .should('have.text', 'Transferência realizada!');

    });
});