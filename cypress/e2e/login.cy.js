describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Arrange
    cy.visit('http://localhost:4000')
    
    //Actions
    cy.get('#username')   //quando temos comandos muito complexos e que se extendem muito na mesma linha
      .click()            //passando de 80 caracteres, é recomendado quebrar a linha para melhorar a 
      .type('julio.lima') // legibilidade do código, deixando cada comando em uma linha e identtado dessa forma
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Asserts
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
})