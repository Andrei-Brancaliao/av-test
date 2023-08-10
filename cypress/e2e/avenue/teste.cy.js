describe('teste acessibilidade', ()=>{
    it('teste', ()=> {
        cy.visit('https://avenue.us/');
        cy.injectAxe();
        cy.checkA11y();
    })
})