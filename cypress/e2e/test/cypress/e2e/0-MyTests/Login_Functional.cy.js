/// <reference types="cypress" /> 
it ('Login using valid credentials', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')   
    cy.get('input[name="password"]').type('admin123')   
    cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button').click() 
})

