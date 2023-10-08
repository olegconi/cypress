/// <reference types="cypress" /> 
it ('Verify items from the main menu', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//precondition: user should be logged in using these credentials: Username : Admin, Password : admin123 
        cy.url().should('include', '/dashboard') 
        cy.get('.oxd-userdropdown-name').click() 
        let main_m=['Admin','PIM','Leave','Time','Recruitment','My Info','Performance','Dashboard','Directory','Maintenance','Claim','Buzz'];
        for (let i=0;i<main_m.length;i++){
        cy.get('.oxd-main-menu-item-wrapper').eq(i).should('contain',main_m[i])
    } 
})
