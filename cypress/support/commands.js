Cypress.Commands.add("login", () => {
  cy.session(
    [
      Cypress.env("username"),
      Cypress.env("password")
    ],
    () => {
      cy.visit("/login/entrar");

      cy.get('input[formcontrolname="login"]')
        .should("be.visible")
        .type(Cypress.env("username"), { log: false });

      cy.get('input[formcontrolname="password"]')
        .should("be.visible")
        .type(Cypress.env("password"), { log: false });

      cy.get('button[aria-label="ENTRAR"]')
        .should("be.visible")
        .and("be.enabled")
        .click();

      cy.url().should(
        "include",
        "/app/home/canal/catalogo"
      );
    }
  );
});