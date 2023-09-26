/// <reference types="cypress" />
it ('google test', function () {
    cy.visit('https://www.google.com')
    cy.get('.SDkEP').type('Testing search field!{enter}')
    cy.get(':nth-child(1) > .MjjYud > .g > .N54PNb > .jGGQ5e > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    cy.contains('Imagini').click()
    

})