/// <reference types="cypress" />

context("Categories", () => {
  beforeEach(() => {
    cy.visit("/categorias");
  });

  describe("categories", () => {
    it("open a category", () => {
      const CATEGORY = {
        name: "comidas rápidas",
        slug: "comidas-rapidas",
        total: 2,
      };

      cy.get(`a[href="/categorias/${CATEGORY.slug}"]`)
        .invoke("text")
        .should("have", CATEGORY.name);

      cy.get(`a[href="/categorias/${CATEGORY.slug}"]`).click();

      cy.url().should("include", `/categorias/${CATEGORY.slug}`);

      cy.get(".business").should("have.length", CATEGORY.total);
    });
  });
});
