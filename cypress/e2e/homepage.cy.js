describe("Homepage Under Development", () => {
  it("loads main heading and messages", () => {
    cy.visit("/");

    cy.get("[data-cy=main-heading]").should("contain.text", "OptixDigitalAI");
    cy.get("[data-cy=under-development-message]").should(
      "contain.text",
      "Our website is currently under development"
    );
  });
});
