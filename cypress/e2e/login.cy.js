describe('Login', () => {
  beforeEach(() => {
    //Arrange
    //Quando uso a baseUrl definida no cypress.config.js, não preciso passar a URL completa para o comando visit, basta passar a parte relativa
    cy.visit('/')
    cy.screenshot('ao-abrir-a-pagina-de-login')
  });

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Actions

    cy.fazerLoginComCredenciaisValidas();
   
    //Asserts
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })


  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Actions
    cy.fazerLoginComCredenciaisInvalidas(); 

    //Asserts
    cy.validarToast('Erro no login. Tente novamente.');
  })
})