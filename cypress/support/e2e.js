// ***********************************************************
// support/e2e.js is processed and loaded automatically before
// your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Disable uncaught exception handling to prevent test failures
// due to application errors
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent the error from failing the test
  return false
})

// Set default timeout for commands
Cypress.config('defaultCommandTimeout', 10000)
