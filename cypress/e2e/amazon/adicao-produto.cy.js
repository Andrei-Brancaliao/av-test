describe('Procura e adição de produto', () => {
    it('Procurar por produto e adicionar no carrinho', () => {
      cy.visit('https://www.amazon.com.br');

      cy.get('[id="twotabsearchtextbox"]').type('Geladeira');
      cy.get('[id="nav-search-submit-button"]').click();
      cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click();

      cy.get('[id="add-to-cart-button"]').click();

      cy.get('[id="twotabsearchtextbox"]').type('Escova de dente');
      cy.get('[id="nav-search-submit-button"]').click();
      cy.get('[class="a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal"]').first().click();
     // cy.get('[class="a-size-base-plus a-color-base a-text-normal"]').should('include.text','Fogão').click();
      cy.get('[id="add-to-cart-button"]').click();
      cy.get('[id="nav-cart-count-container"]').click();
    

    //   cy.get('[class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')
    //     .eq(0)
    //     .invoke('text')
    //     .invoke('slice', 3)
    //     .invoke('replace', '.' , '')
    //     .invoke('replace', ',' , '.')
    //     .then(parseFloat) //descobrir como passar de texto pra float
    //     .then(cy.log)
    //     .then((valorUm) => {
    //       cy.get('[class="a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold"]')
    //       .eq(1)
    //       .invoke('text')
    //       .invoke('slice', 3)
    //       .invoke('replace', '.' , '')
    //       .invoke('replace', ',' , '.')
    //       .then(parseFloat)
    //       .then(cy.log)
    //       .then((valorDois) => {
    //           cy.get('[class="a-size-medium a-color-base sc-price sc-white-space-nowrap"]')
    //           .eq(0)
    //           .invoke('text')
    //           .invoke('slice', 3)
    //           .invoke('replace', '.' , '')
    //           .invoke('replace', ',' , '.')
    //           .then(parseFloat)
    //           .then(cy.log)
    //           .then((valorFinal) => {
    //               expect(valorFinal).to.equal(valorUm) //PROCURAR AQUI// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< ASSERT ERRADO null = null ???
    //           })
    //       })

    // });
    
    })
})