class CheckoutPage {
  elements = {
    addressDetails: () => cy.get('#address_delivery'),
    reviewOrder: () => cy.get('#cart_info'),
    commentTextArea: () => cy.get('.form-control').contains('textarea'),
    placeOrderButton: () => cy.get('a[href="/payment"]'),
    
    // Payment page elements
    nameOnCard: () => cy.get('[data-qa="name-on-card"]'),
    cardNumber: () => cy.get('[data-qa="card-number"]'),
    cvc: () => cy.get('[data-qa="cvc"]'),
    expiryMonth: () => cy.get('[data-qa="expiry-month"]'),
    expiryYear: () => cy.get('[data-qa="expiry-year"]'),
    payButton: () => cy.get('[data-qa="pay-button"]'),
    
    // Success message
    orderPlacedTitle: () => cy.get('[data-qa="order-placed"]'),
    successMessage: () => cy.contains('p', 'Congratulations! Your order has been confirmed!')
  }

  verifyAddressDetails() {
    this.elements.addressDetails().should('be.visible')
  }

  verifyReviewOrder() {
    this.elements.reviewOrder().should('be.visible')
  }

  fillCommentAndPlaceOrder(comment) {
    cy.get('textarea[name="message"]').type(comment)
    this.elements.placeOrderButton().click()
  }

  fillPaymentDetails(paymentData) {
    this.elements.nameOnCard().type(paymentData.nameOnCard)
    this.elements.cardNumber().type(paymentData.cardNumber)
    this.elements.cvc().type(paymentData.cvc)
    this.elements.expiryMonth().type(paymentData.expiryMonth)
    this.elements.expiryYear().type(paymentData.expiryYear)
  }

  clickPayAndConfirm() {
    this.elements.payButton().click()
  }

  verifyOrderSuccess() {
    this.elements.orderPlacedTitle()
      .should('be.visible')
      .and('contain', 'Order Placed!')
    this.elements.successMessage()
      .should('be.visible')
  }
}

export default CheckoutPage
