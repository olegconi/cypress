/// <reference types="cypress" /> 
it ('Check the presence of the logo', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-branding').should('be.visible')   
})


