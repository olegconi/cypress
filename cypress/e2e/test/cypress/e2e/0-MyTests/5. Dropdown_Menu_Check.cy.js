/// <reference types="cypress" /> 
import selectors from "../../support/selectors";
const { dropDownMenu, dropDownElement } = selectors;

it ('login test', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('include', '/dashboard') 
    cy.get(dropDownMenu).click() 
    let drop_m=['About','Support','Change Password','Logout'];
    for (let i=0;i<drop_m.length;i++){
    cy.get(dropDownElement).eq(i).should('contain',drop_m[i])
    } 
})
