class CartPage {
  elements = {
    cartItems: () => cy.get('.cart_description'),
    proceedToCheckoutButton: () => cy.get('.btn.check_out'),
    checkoutModal: () => cy.get('#checkoutModal')
  }

  verifyCartPageDisplayed() {
    cy.url().should('include', '/view_cart')
  }

  clickProceedToCheckout() {
    this.elements.proceedToCheckoutButton().click()
  }
}

export default CartPage
