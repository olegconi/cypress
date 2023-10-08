/// <reference types="cypress" /> 
import selectors from "../support/selectors";
const { loginField, passwordField,submitButton } = selectors;

it ('Check the presence of the logo on the login page', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.orangehrm-login-branding').should('be.visible')   
});




it ('Login using not valid credentials', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(loginField).type("Admin1");
    cy.get(passwordField).type("admin1234");
    cy.get(submitButton).click();
});


it ('Login using valid credentials', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(loginField).type("Admin");
    cy.get(passwordField).type("admin123");
    cy.get(submitButton).click();
});


const { dropDownMenu, dropDownElement } = selectors;

it ('Dropdown menu items check', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/dashboard') 
    cy.get(dropDownMenu).click() 
    let drop_m=['About','Support','Change Password','Logout'];
    for (let i=0;i<drop_m.length;i++){
    cy.get(dropDownElement).eq(i).should('contain',drop_m[i])
    } 
});


it ('Logout test', function () {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get(dropDownMenu).click()
    cy.get(dropDownElement).last().contains('Logout').click()
});
