
describe('Cadastro - acesso pela home', () => {
  it('Completar formulário de cadastro de novo usuário com e-mail', () => {
    cy.visit('https://www.amazon.com.br');
    /**
    * realHover está inconsistente, solução atual com realTouch não demonstra 
    * o real comportamento do componente - que deveria ser acionado com hover
    * do mouse
    * cy.get('[data-nav-ref="nav_ya_signin"]').realHover({ position: "center" });
    */
    cy.get('[data-nav-ref="nav_ya_signin"]').realTouch('mouse')
    cy.contains('a', 'Comece aqui.').click();
    cy.get('[id="ap_customer_name"]').type('Andrei Farto da Silva Brancalião'); 
    cy.get('[id="ap_email"]').type('anndreibrancaliao@gmail.com');
    cy.get('[id="ap_password"]').type('Teste123');
    cy.get('[id="ap_password_check"]').type('Teste123');
  })

  it('Completar formulário de cadastro de novo usuário com telefone', () => {
    cy.visit('https://www.amazon.com.br');
    //cy.get('[data-nav-ref="nav_ya_signin"]').trigger('onmouseover')
    cy.get('[data-nav-ref="nav_ya_signin"]').realTouch('mouse')
    cy.contains('a', 'Comece aqui.').click();
    cy.get('[id="ap_customer_name"]').type('Andrei Farto da Silva Brancalião'); 
    cy.get('[id="ap_email"]').type('11957878806');
    cy.get('[id="ap_password"]').type('Teste123');
    cy.get('[id="ap_password_check"]').type('Teste123');
  })
})


describe('Cadastro - acesso pela tela de Login', () => {
  it('Completar formulário de cadastro de novo usuário com e-mail', () => {
    cy.visit('https://www.amazon.com.br');
     // cy.contains('div', 'Olá, faça seu login').realHover('mouse')
    cy.get('[data-nav-ref="nav_ya_signin"]').click();
    cy.get('[id="createAccountSubmit"]').click();
    cy.get('[id="ap_customer_name"]').type('Andrei Farto da Silva Brancalião'); 
    cy.get('[id="ap_email"]').type('anndreibrancaliao@gmail.com');
    cy.get('[id="ap_password"]').type('Teste123');
    cy.get('[id="ap_password_check"]').type('Teste123');
  })
  
  it('Completar formulário de cadastro de novo usuário com telefone', () => {
    cy.visit('https://www.amazon.com.br');
    cy.get('[data-nav-ref="nav_ya_signin"]').click();
    cy.get('[id="createAccountSubmit"]').click();
    cy.get('[id="ap_customer_name"]').type('Andrei Farto da Silva Brancalião'); 
    cy.get('[id="ap_email"]').type('11957878806');
    cy.get('[id="ap_password"]').type('Teste123');
    cy.get('[id="ap_password_check"]').type('Teste123');
  })
})


