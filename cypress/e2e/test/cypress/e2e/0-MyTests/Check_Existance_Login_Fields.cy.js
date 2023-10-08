/// <reference types="cypress" /> 
it ('Check existance of the login fields', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').should('be.visible')   
    cy.get('input[name="password"]').should('be.visible')   
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').should('be.visible') 
})

