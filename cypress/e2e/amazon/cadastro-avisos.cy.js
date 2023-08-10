describe('Avisos de campo', () => {
    it('Avisos de campos vazios', () => {
      cy.visit('https://www.amazon.com.br');
      cy.get('[data-nav-ref="nav_ya_signin"]').click();
      cy.get('[id="auth-create-account-link"]').click();
      cy.get('[id="continue"]').click();
      cy.get('[class="a-alert-content"]').contains('Insira seu nome').should('be.visible');
      cy.get('[class="a-alert-content"]').contains('Digite seu e-mail ou número de telefone celular').should('be.visible');
      cy.get('[class="a-alert-content"]').contains('Mínimo de 6 caracteres necessários').should('be.visible'); 
    })

    it('Avisos de campos inválidos', () => {
        cy.visit('https://www.amazon.com.br');
        cy.get('[data-nav-ref="nav_ya_signin"]').click();
        cy.get('[id="auth-create-account-link"]').click();
        cy.get('[id="ap_customer_name"]').type('Andrei Farto da Silva Brancalião'); 
        cy.get('[id="ap_email"]').type('anndre');
        cy.get('[id="ap_password"]').type('Teste123');
        cy.get('[id="ap_password_check"]').type('Teste');
        cy.get('[id="continue"]').click();
        cy.get('[class="a-alert-content"]').contains('Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.').should('be.visible');
        cy.get('[class="a-alert-content"]').contains('As senhas não são iguais').should('be.visible');

    })
})