it ('Add a new employee', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //precondition: user should be logged in using these credentials: Username : Admin, Password : admin123 
    cy.url().should('include', '/dashboard') 
    cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').eq(1).should('contain','PIM').click() 
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary .oxd-icon.bi-plus.oxd-button-icon').click()
    cy.get('.oxd-input.oxd-input--active.orangehrm-firstname').type('First Name Test')
    cy.get('.oxd-input.oxd-input--active.orangehrm-middlename').type('Middle Name Test')
    cy.get('.oxd-input.oxd-input--active.orangehrm-lastname').type('Last Name Test')
    cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary.orangehrm-left-space').click()
     
})

