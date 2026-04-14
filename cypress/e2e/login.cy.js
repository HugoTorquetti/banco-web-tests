describe('Login', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('http://localhost:4000')
    cy.screenshot('ao-abrir-a-pagina-de-login')
  });

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Actions
    cy.get('#username')   //quando temos comandos muito complexos e que se extendem muito na mesma linha
      .click()            //passando de 80 caracteres, é recomendado quebrar a linha para melhorar a 
      .type('julio.lima') // legibilidade do código, deixando cada comando em uma linha e identtado dessa forma
    cy.get('#senha').click().type('123456')
    cy.screenshot('preenchendo-os-campos-de-login')
    cy.get('#login-section > .btn').click()
    cy.screenshot('após-clicar-no-botão-entrar')

    //Asserts
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Actions
    cy.get('#username')
      .click()            
      .type('julio.lima') 
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click() 
    /*A forma de selecionar o botão de entrar para o clique 
    pode ser feita assim, pois o código fica mais descritivo*/

    //Asserts
    cy.get('.toast')
      .should('be.visible')
      .should('have.text', 'Erro no login. Tente novamente.')
  })
})