// cypress/support/e2e.js

// Custom command to visit homepage
Cypress.Commands.add("visitHome", () => {
  cy.visit("/"); // Uses baseUrl from cypress.config.js if set
});

// Custom command to check main heading
Cypress.Commands.add("checkMainHeading", (text = "OptixDigitalAI") => {
  cy.get("[data-cy=main-heading]")
    .should("be.visible")
    .and("contain.text", text);
});
