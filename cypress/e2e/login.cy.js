describe('Login', () => {
  beforeEach(() => {
    //Arrange
    //Quando uso a baseUrl definida no cypress.config.js, não preciso passar a URL completa para o comando visit, basta passar a parte relativa
    cy.visit('/')
    
    cy.screenshot('ao-abrir-a-pagina-de-login')
  });

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Actions

    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username')   //quando temos comandos muito complexos e que se extendem muito na mesma linha
        .click()            //passando de 80 caracteres, é recomendado quebrar a linha para melhorar a 
        .type(credenciais.valida.usuario) 
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('preenchendo-os-campos-de-login')
    cy.get('#login-section > .btn').click()
    cy.screenshot('após-clicar-no-botão-entrar')

    //Asserts
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Actions
    cy.fixture('credenciais').then((credenciais) => {
      cy.get('#username').click().type(credenciais.invalida.usuario) 
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click() 
    /*A forma de selecionar o botão de entrar para o clique 
    pode ser feita assim, pois o código fica mais descritivo*/

    //Asserts
    cy.get('.toast')
      .should('be.visible')
      .should('have.text', 'Erro no login. Tente novamente.')
  })
})