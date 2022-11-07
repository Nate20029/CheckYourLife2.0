// Ejemplos de pruebas
/* describe('The Home Page', () => {
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

describe('The Login Page', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec('npm run db:reset && npm run db:seed');

    // seed a user in the DB that we can control from our tests
    // assuming it generates a random password for us
    cy.request('POST', '/test/seed/user', { username: 'jane.lane' })
      .its('body')
      .as('currentUser');
  });

  it('sets auth cookie when logging in via form submission', function () {
    // destructuring assignment of the this.currentUser object
    const { username, password } = this.currentUser;

    cy.visit('/login');

    cy.get('input[name=username]').type(username);

    // {enter} causes the form to submit
    cy.get('input[name=password]').type(`${password}{enter}`);

    // we should be redirected to /dashboard
    cy.url().should('include', '/dashboard');

    // our auth cookie should be present
    cy.getCookie('your-session-cookie').should('exist');

    // UI should reflect this user being logged in
    cy.get('h1').should('contain', 'jane.lane');
  });
}); */

describe('Login tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // URL Aplicacion
  });

  it('Pagina Inicial Carga', () => {
    cy.contains('Username');
    cy.contains('Password');
    cy.contains('Login');
    // cy.get('form > a').click();
  });

  it('Login del usuario ', () => {
    cy.get('input').first().type('gal20079@uvg.edu.gt');
    cy.get('input').last().type('Cronograma#19');
    cy.get('form > a').click();
    cy.contains('Chat'); cy.contains('Tareas'); cy.contains('Finanzas'); cy.contains('Cronometro'); cy.contains('Perfil');
    cy.get('Perfil');
    cy.get('.out');
  });
});