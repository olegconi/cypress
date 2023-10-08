it ('login test', function () {
//precondition: user should be logged in using these credentials: Username : Admin, Password : admin123 
cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.url().should('include', '/dashboard') 
cy.get('.oxd-userdropdown-name').click() 
cy.get('.oxd-userdropdown-link').last().contains('Logout').click()
cy.url().should('include', 'auth/login') 
})
