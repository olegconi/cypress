/// <reference types="cypress" /> 
import selectors from "../../support/selectors";
const { loginField, passwordField,submitButton } = selectors;

it ('Login using not valid credentials', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(loginField).type("Admin1");
    cy.get(passwordField).type("admin1234");
    cy.get(submitButton).click();
})

