import HomePage from '../support/pages/HomePage'
import LoginSignupPage from '../support/pages/LoginSignupPage'
import AccountPage from '../support/pages/AccountPage'

describe('Test Case 2: Login User with correct email and password', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  const accountPage = new AccountPage()
  let userData

  before(() => {
    // Create a user first for login test
    cy.generateUserData().then((data) => {
      userData = data
      cy.registerUser(userData)
      // Logout after registration to test login
      homePage.clickLogout()
    })
  })

  it('Should login user with correct credentials', () => {
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

    // 9. Click 'Delete Account' button
    homePage.clickDeleteAccount()

    // 10. Verify that 'ACCOUNT DELETED!' is visible
    accountPage.verifyAccountDeleted()
  })
})
