/// <reference types="cypress" /> 
it ('login test', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//precondition: user should be logged in using these credentials: Username : Admin, Password : admin123 
        cy.url().should('include', '/dashboard') 
        cy.get('.oxd-userdropdown-name').click() 
        let drop_m=['About','Support','Change Password','Logout'];
        for (let i=0;i<drop_m.length;i++){
        cy.get('.oxd-userdropdown-link').eq(i).should('contain',drop_m[i])

    } 
})
