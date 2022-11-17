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

  it.only('Pagina Inicial Carga', () => {
    cy.contains('Username');
    cy.contains('Password');
    cy.contains('Login');
    // cy.get('form > a').click();
  });

  it.only('Login del usuario externo ', () => {
    cy.get('[style="position: absolute; top: 78%; left: 45%; height: 40px; width: 40px; border-radius: 20px; background-color: rgb(20, 39, 155); align-items: center; justify-content: center;"] > button').click({ force: true });
    cy.get('[style="position: absolute; top: 78%; left: 49%; height: 40px; width: 40px; border-radius: 20px; background-color: rgb(244, 67, 54); align-items: center; justify-content: center;"] > button').click({ force: true });
    cy.get('[style="position: absolute; top: 78%; left: 53%; height: 40px; width: 40px; border-radius: 20px; background-color: rgb(21, 101, 192); align-items: center; justify-content: center;"] > button').click({ force: true });
  });

  it.only('Forget Password ', () => {
    cy.get('input').first().type('gal20079@uvg.edu.gt');
    cy.get('.link > :nth-child(1)').click({ force: true });
  });

  it.only('Sign Up? ', () => {
    cy.get('input').first().type('gal20079@uvg.edu.gt');
    cy.get('.link > :nth-child(2)').click({ force: true });
  });

  it.only('Login del usuario ', () => {
    cy.get('input').first().type('system@gmail.com');
    cy.get('input').last().type('123456#');
    cy.get('form > a').click();
    cy.contains('Chat'); cy.contains('Tareas'); cy.contains('Finanzas');
    cy.contains('Cronometro'); cy.contains('Perfil');
    /*
    cy.get('#tabs-:r1:--tab-4');
    cy.get('.out').click();
    */
  });

  it.only('Log Out', () => {
    cy.get('#tabs-\\:r1\\:--tab-4').should('be.visible').click();
    cy.get('.out').click();
    cy.contains('Username');
    cy.contains('Password');
    cy.contains('Login');
  });
});
