/// <reference types="cypress" /> 
it ('Check the presence of the logo on the login page', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-branding').should('be.visible')   
})


