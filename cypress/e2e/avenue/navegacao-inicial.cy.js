describe('Navegação entre páginas', () => {
    it('Navegação home -> banking', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="header_banking"]').eq(0).click();
      cy.get('[class="banking--hero-title"]').invoke('html').should('equal', 'Conta Internacional');
      cy.get('[id="newpage_banking_create_acc_hero"]').invoke('html').should('equal', 'Abra sua conta agora');
      cy.get('[class="banking--hero-image-item"]').should('be.visible');
      cy.get('[class="banking--section-one-image-item"]').should('be.visible');
      
    })

    it('Navegação home -> create account 01', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="home_principal_create_account"]').contains('Abra sua conta').click({scrollBehavior: false});
      cy.get('h1').should('have.text', 'Abra sua conta');
      cy.get('[name="first_name"]').should('be.visible');
      cy.get('[name="cpf"]').should('be.visible');
    })

    it('Navegação home -> create account 02', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="header_create_account"]').contains('Abra sua conta').click({scrollBehavior: false});
      cy.get('h1').should('have.text', 'Abra sua conta');
      cy.get('[name="first_name"]').should('be.visible');
      cy.get('[name="cpf"]').should('be.visible');
    })

    it('Navegação home -> login -> create account', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="header_account_login"]').eq(0).click({scrollBehavior: false});
      cy.get('h3').should('have.text', 'Acesse sua conta');
      cy.get('[name="email"]').should('be.enabled');
      cy.get('[class="column"]').find('[type="submit"]').should('be.disabled');
      cy.get('[href="/register"]').should('have.text', 'Cadastre-se').click();
      cy.get('h1').should('have.text', 'Abra sua conta');
      cy.get('[name="first_name"]').should('be.visible');
      cy.get('[name="cpf"]').should('be.visible');      
    })  

    it('Navegação home -> login', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="header_account_login"]').eq(0).click({scrollBehavior: false});
      cy.get('h3').should('have.text', 'Acesse sua conta');
      cy.get('[name="email"]').should('be.enabled');
      cy.get('[class="column"]').find('[type="submit"]').should('be.disabled');
    })

    it('Navegação home -> quem somos', () => {
      cy.visit('https://avenue.us/');
      cy.get('[id="home_principal_about_avenue"]').should("have.attr", "href", "/quem-somos/").click({scrollBehavior: false});
      cy.get('[class="page-title-holder"]').find('h1').should('have.text', 'Quem somos')
      cy.get('[class="page-title-holder"]').find('h2').should('have.text', 'Somos a líder')

      //youtube displayed?
      //cy.get('[class="responsive-iframe"]').find('iframe').should('not.be.enabled') verificando chamada está pegando o elemento
      cy.get('[class="responsive-iframe"]').find('iframe').should('be.enabled') //verificação vai dar falha. não está aparecendo no chrome, opera gx
    })


    it('Navegação home -> twitter', () => {
      cy.visit('https://avenue.us/');
      cy.get('[class="content-social"]').find('[id="footer_twitter"]').should("have.attr", "href", "https://twitter.com/avenue_us");
    })
    
    it('Navegação home -> instagram', () => {
      cy.visit('https://avenue.us/');
      cy.get('[class="content-social"]').find('[id="footer_instagram"]').should("have.attr", "href", "https://www.instagram.com/avenue.us");
    })

    it('Navegação home -> linkedin', () => {
      cy.visit('https://avenue.us/');
      cy.get('[class="content-social"]').find('[id="footer_linkedin"]').should("have.attr", "href", "https://www.linkedin.com/company/avenue-securities-limited/mycompany/");
    })

})