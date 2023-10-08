/// <reference types="cypress" /> 
import selectors from "../../support/selectors";
const { loginField, passwordField, submitButton } = selectors;

it ('Login using valid credentials', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(loginField).type("Admin");
    cy.get(passwordField).type("admin123");
    cy.get(submitButton).click();
});

