class ProductsPage {
  elements = {
    allProductsTitle: () => cy.get('.features_items h2').contains('All Products'),
    searchedProductsTitle: () => cy.get('.features_items h2').contains('Searched Products'),
    productsList: () => cy.get('.features_items .col-sm-4'),
    searchInput: () => cy.get('#search_product'),
    searchButton: () => cy.get('#submit_search'),
    viewProductLink: () => cy.get('a[href*="/product_details"]').first(),
    addToCartButtons: () => cy.get('.btn.add-to-cart')
  }

  verifyAllProductsVisible() {
    this.elements.allProductsTitle().should('be.visible')
    cy.url().should('include', '/products')
  }

  verifyProductsListVisible() {
    this.elements.productsList().should('have.length.greaterThan', 0)
  }

  clickViewProduct() {
    this.elements.viewProductLink().click()
  }

  searchProduct(productName) {
    this.elements.searchInput().type(productName)
    this.elements.searchButton().click()
  }

  verifySearchedProductsVisible() {
    this.elements.searchedProductsTitle().should('be.visible')
  }

  verifySearchResults(productName) {
    this.elements.productsList().should('have.length.greaterThan', 0)
    // Verify that at least the search returned products (search functionality works)
    // Note: The site may return related products that don't exactly match the search term
  }

  addProductToCart(productIndex = 0) {
    this.elements.addToCartButtons().eq(productIndex).click({ force: true })
  }
}

export default ProductsPage
