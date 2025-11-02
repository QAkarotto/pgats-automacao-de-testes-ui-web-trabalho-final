class HomePage {
  elements = {
    logo: () => cy.get('img[alt="Website for automation practice"]'),
    signupLoginLink: () => cy.get('a[href="/login"]'),
    loggedInAsText: () => cy.get('li:contains("Logged in as")'),
    deleteAccountLink: () => cy.get('a[href="/delete_account"]'),
    logoutLink: () => cy.get('a[href="/logout"]'),
    contactUsLink: () => cy.get('a[href="/contact_us"]'),
    productsLink: () => cy.get('a[href="/products"]'),
    cartLink: () => cy.get('a[href="/view_cart"]'),
    subscriptionTitle: () => cy.get('.footer-widget h2:contains("Subscription")'),
    subscriptionEmail: () => cy.get('#susbscribe_email'),
    subscriptionButton: () => cy.get('#subscribe'),
    subscriptionSuccessMessage: () => cy.get('#success-subscribe .alert-success')
  }

  visit() {
    cy.visit('/')
  }

  verifyHomePageVisible() {
    this.elements.logo().should('be.visible')
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
  }

  clickSignupLogin() {
    this.elements.signupLoginLink().click()
  }

  clickContactUs() {
    this.elements.contactUsLink().click()
  }

  clickProducts() {
    this.elements.productsLink().click()
  }

  clickCart() {
    this.elements.cartLink().click()
  }

  clickDeleteAccount() {
    this.elements.deleteAccountLink().click()
  }

  clickLogout() {
    this.elements.logoutLink().click()
  }

  verifyLoggedInAs(username) {
    this.elements.loggedInAsText().should('contain', username)
  }

  scrollToFooter() {
    cy.scrollTo('bottom')
  }

  verifySubscriptionVisible() {
    this.elements.subscriptionTitle().should('be.visible')
  }

  fillSubscriptionEmail(email) {
    this.elements.subscriptionEmail().type(email)
  }

  clickSubscribe() {
    this.elements.subscriptionButton().click()
  }

  verifySubscriptionSuccess() {
    this.elements.subscriptionSuccessMessage()
      .should('be.visible')
      .and('contain', 'You have been successfully subscribed!')
  }
}

export default HomePage
