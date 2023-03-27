/// <reference types="Cypress" />

describe("visit the facelist", () => {
  it("private route success", () => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-cy="login-form"]').should("be.visible");
  });
  it("is Navbar visible", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="fixed-navbar"]').should("be.visible");
  });
  it("go to login page", () => {
    cy.visit("http://localhost:3000/login");
    cy.get('[data-cy="login-form"]').should("be.visible");
  });

  it("username is present", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("foo");
    cy.get('[data-cy="username-input"]').should("have.value", "foo");
  });
  it("password is present", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="password-input"]').type("bar");
    cy.get('[data-cy="password-input"]').should("have.value", "bar");
  });
  it("should login and redirect to home page", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("foo");
    cy.get('[data-cy="password-input"]').type("bar");
    cy.get('[data-cy="login-button"]').contains("Login").click();
  });

  it("contacts should be visible", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("foo");
    cy.get('[data-cy="password-input"]').type("bar");
    cy.get('[data-cy="login-button"]').contains("Login").click();
    cy.get('[data-cy="contact-card"]').should("be.visible");
  });

  it("should have infinite scrolling and loading visible", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("foo");
    cy.get('[data-cy="password-input"]').type("bar");
    cy.get('[data-cy="login-button"]').contains("Login").click();
    cy.get('[data-cy="contact-list"]').should("be.visible");
    cy.get('[data-cy="contact-list"]').scrollTo('bottom')
    cy.get('[data-cy="loading-card"]').should('be.visible');
  });

  it(" logout button is visible and should logout on click", () => {
    cy.visit("http://localhost:3000");
    cy.get('[data-cy="username-input"]').type("foo");
    cy.get('[data-cy="password-input"]').type("bar");
    cy.get('[data-cy="login-button"]').contains("Login").click();
    cy.get('[data-cy="logout-button"]').should("be.visible");
    cy.get('[data-cy="logout-button"]').contains("Logout").click();
  });
});
