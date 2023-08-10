describe('Navegação entre páginas', () => {
    it('Navegação home -> banking', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="header_banking"]').eq(0).click();
      cy.get('[class="banking--hero-title"]').invoke('html').should('equal', 'Conta Internacional');
      cy.get('[id="newpage_banking_create_acc_hero"]').invoke('html').should('equal', 'Abra sua conta agora');
      cy.get('[class="banking--hero-image-item"]').should('be.visible');
      cy.get('[class="banking--section-one-image-item"]').should('be.visible');
      
    })
})