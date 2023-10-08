it ('Check the menu  functionality, menu must minimize and expand', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //precondition: user should be logged in using these credentials: Username : Admin, Password : admin123 
    cy.url().should('include', '/dashboard') 
    cy.get('.oxd-icon-button.oxd-main-menu-button').click() 
    cy.get('.oxd-icon-button.oxd-main-menu-button').click()      
})

