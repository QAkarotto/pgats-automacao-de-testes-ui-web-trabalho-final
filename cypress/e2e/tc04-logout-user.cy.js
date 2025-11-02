import HomePage from '../support/pages/HomePage'
import LoginSignupPage from '../support/pages/LoginSignupPage'

describe('Test Case 4: Logout User', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  let userData

  before(() => {
    // Create a user first for logout test
    cy.generateUserData().then((data) => {
      userData = data
      cy.registerUser(userData)
      // Logout after registration to test login flow
      homePage.clickLogout()
    })
  })

  after(() => {
    // Cleanup: Login and delete account
    cy.loginUser(userData.email, userData.password)
    cy.deleteAccount()
  })

  it('Should logout user successfully', () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    homePage.visit()

    // 3. Verify that home page is visible successfully
    homePage.verifyHomePageVisible()

    // 4. Click on 'Signup / Login' button
    homePage.clickSignupLogin()

    // 5. Verify 'Login to your account' is visible
    loginSignupPage.verifyLoginVisible()

    // 6. Enter correct email address and password
    loginSignupPage.fillLoginForm(userData.email, userData.password)

    // 7. Click 'login' button
    loginSignupPage.clickLogin()

    // 8. Verify that 'Logged in as username' is visible
    homePage.verifyLoggedInAs(userData.name)

    // 9. Click 'Logout' button
    homePage.clickLogout()

    // 10. Verify that user is navigated to login page
    cy.url().should('include', '/login')
    loginSignupPage.verifyLoginVisible()
  })
})
