it ('Check the Help button', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('.oxd-icon.bi-question-lg').click()  
    
})

