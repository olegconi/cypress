/// <reference types="cypress" /> 
import selectors from "../../support/selectors";
const { dropDownMenu, dropDownElement } = selectors;

it ('Logout test', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/dashboard') 
    cy.get(dropDownMenu).click() 
    cy.get(dropDownElement).last().contains('Logout').click()
    cy.url().should('include', 'auth/login')
})
