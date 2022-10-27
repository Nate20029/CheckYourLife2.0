describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000'); // URL Aplicacion

    cy.contains('type').click();

    cy.url().should('include', '/commands/actions');

    // Input para verificar que cambie
    cy.get('')
      .type('gal20079@uvg.edu.gt')
      .should('have.value', 'gal20079@uvg.edu.gt');
  });
});
