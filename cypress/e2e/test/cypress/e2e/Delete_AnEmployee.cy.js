it ('Add a new employee', function () {
    cy.visit('opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.url().should('include', '/dashboard').then(() => {    
    cy.get('.oxd-text.oxd-text--span.oxd-main-menu-item--name').eq(1).should('contain','PIM').click() 
    })
    cy.get('input').eq(1).type('Last Name Test')
    cy.get('button').eq(4).click({force: true})

    cy.get('.bi-trash').first().click()
    cy.get('.oxd-button--label-danger').click()
})


cy.window().then(($window) => {
    const checkBox = $window.eval(
      `document.querySelectorAll('input[type="checkbox"]').length`,
    );
    if (checkBox < 1) {


    }
  });