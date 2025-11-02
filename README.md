# Automation Exercise - Projeto de Automação de Testes UI Web

[![Cypress Tests](https://github.com/QAkarotto/pgats-automacao-de-testes-ui-web-trabalho-final/actions/workflows/cypress.yml/badge.svg)](https://github.com/QAkarotto/pgats-automacao-de-testes-ui-web-trabalho-final/actions/workflows/cypress.yml)

Projeto de automação de testes de UI web desenvolvido com Cypress para a aplicação [Automation Exercise](https://automationexercise.com) como trabalho final da disciplina de Automação de Testes na Camada de Interface (Web) da Pós-Graduação em Automação de Testes.

## 📋 Sobre o Projeto

Este projeto implementa testes automatizados end-to-end (E2E) para os principais fluxos da aplicação Automation Exercise, incluindo:

- **Test Case 1**: Register User - Registro completo de novo usuário
- **Test Case 2**: Login User with correct email and password - Login com credenciais válidas
- **Test Case 3**: Login User with incorrect email and password - Login com credenciais inválidas
- **Test Case 4**: Logout User - Logout de usuário autenticado
- **Test Case 5**: Register User with existing email - Tentativa de registro com email existente
- **Test Case 6**: Contact Us Form - Preenchimento e envio do formulário de contato
- **Test Case 8**: Verify All Products and product detail page - Validação de produtos e página de detalhes
- **Test Case 9**: Search Product - Busca de produtos
- **Test Case 10**: Verify Subscription in home page - Assinatura de newsletter
- **Test Case 15**: Place Order: Register before Checkout - Fluxo completo de compra com registro

## 🛠️ Tecnologias Utilizadas

- **Cypress** (v13.16.0) - Framework de testes E2E
- **Mochawesome** (v7.1.3) - Gerador de relatórios HTML
- **@faker-js/faker** (v9.2.0) - Geração de dados aleatórios para testes
- **Node.js** (v20+) - Runtime JavaScript
- **GitHub Actions** - CI/CD para execução automatizada dos testes

## 📁 Estrutura do Projeto

```
pgats-automacao-de-testes-ui-web-trabalho-final/
├── .github/
│   └── workflows/
│       └── cypress.yml              # Pipeline CI/CD do GitHub Actions
├── cypress/
│   ├── e2e/                         # Testes E2E
│   │   ├── contact-us-form.cy.js
│   │   ├── login-user-correct.cy.js
│   │   ├── login-user-incorrect.cy.js
│   │   ├── logout-user.cy.js
│   │   ├── place-order-register-checkout.cy.js
│   │   ├── register-existing-email.cy.js
│   │   ├── register-user.cy.js
│   │   ├── search-product.cy.js
│   │   ├── verify-products.cy.js
│   │   └── verify-subscription.cy.js
│   ├── fixtures/                    # Dados de teste
│   │   ├── products.json
│   │   ├── test-file.txt
│   │   └── users.json
│   ├── support/
│   │   ├── pages/                   # Page Objects
│   │   │   ├── AccountPage.js
│   │   │   ├── CartPage.js
│   │   │   ├── CheckoutPage.js
│   │   │   ├── ContactUsPage.js
│   │   │   ├── HomePage.js
│   │   │   ├── LoginSignupPage.js
│   │   │   ├── ProductDetailPage.js
│   │   │   └── ProductsPage.js
│   │   ├── commands.js              # Custom Commands
│   │   └── e2e.js                   # Configurações globais
│   ├── reports/                     # Relatórios de teste (gerados)
│   ├── screenshots/                 # Screenshots de falhas (gerados)
│   └── videos/                      # Vídeos dos testes (gerados)
├── cypress.config.js                # Configuração do Cypress
├── package.json                     # Dependências do projeto
├── .gitignore
└── README.md
```

## 🎯 Boas Práticas Implementadas

### ✅ Seletores CSS (Sem XPath)
Todos os seletores utilizam CSS Selectors, priorizando atributos `data-qa` quando disponíveis:

```javascript
cy.get('[data-qa="signup-name"]')
cy.get('[data-qa="login-email"]')
```

### ✅ Page Object Model (POM)
Cada página da aplicação possui sua própria classe com elementos e métodos encapsulados:

```javascript
class HomePage {
  elements = {
    signupLoginLink: () => cy.get('a[href="/login"]'),
    loggedInAsText: () => cy.get('li:contains("Logged in as")')
  }
  
  clickSignupLogin() {
    this.elements.signupLoginLink().click()
  }
}
```

### ✅ Custom Commands
Comandos reutilizáveis para ações comuns:

```javascript
cy.generateUserData()      // Gera dados de usuário com Faker
cy.registerUser(userData)  // Registra novo usuário
cy.loginUser(email, pass)  // Realiza login
cy.deleteAccount()         // Deleta conta
```

### ✅ Fixtures e Dados Randomizados
- Fixtures para dados estáticos (`users.json`, `products.json`)
- Faker.js para geração dinâmica de dados de teste

### ✅ Relatórios com Mochawesome
Relatórios HTML detalhados com screenshots e estatísticas de execução

## 🚀 Pré-requisitos

- **Node.js** versão 20 ou superior
- **npm** ou **yarn**
- Git

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/QAkarotto/pgats-automacao-de-testes-ui-web-trabalho-final.git
cd pgats-automacao-de-testes-ui-web-trabalho-final
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Execução dos Testes

### Modo Interativo (Cypress Test Runner)
Abre a interface gráfica do Cypress para executar e debugar testes:

```bash
npm run cy:open
```

### Modo Headless (Terminal)

Executar todos os testes:
```bash
npm test
# ou
npm run cy:run
```

Executar em navegador específico:
```bash
npm run cy:run:chrome    # Chrome
npm run cy:run:firefox   # Firefox
```

Executar com interface visível:
```bash
npm run cy:run:headed
```

### Gerar Relatórios

Executar testes e gerar relatório HTML:
```bash
npm run test:report
```

Os relatórios serão gerados em `cypress/reports/html/`

## 📊 Relatórios

### Mochawesome Reports
Após a execução com `npm run test:report`, os relatórios estarão disponíveis em:
- **HTML**: `cypress/reports/html/report.html`
- **JSON**: `cypress/reports/merged-report.json`

### Screenshots e Vídeos
- **Screenshots** de falhas: `cypress/screenshots/`
- **Vídeos** das execuções: `cypress/videos/`

## 🔄 CI/CD - GitHub Actions

O projeto inclui pipeline automatizado que:
- Executa testes em múltiplos navegadores (Chrome e Firefox)
- Gera e armazena relatórios
- Captura screenshots de falhas
- Grava vídeos das execuções
- Publica resultados dos testes

Para visualizar as execuções, acesse a aba **Actions** no repositório do GitHub.

## 📝 Estrutura de Testes

Cada arquivo de teste segue o padrão:

```javascript
import HomePage from '../support/pages/HomePage'
import LoginSignupPage from '../support/pages/LoginSignupPage'

describe('Test Case: Description', () => {
  const homePage = new HomePage()
  const loginSignupPage = new LoginSignupPage()
  
  it('Should perform action successfully', () => {
    homePage.visit()
    homePage.verifyHomePageVisible()
    // ... demais passos do teste
  })
})
```

## 🧪 Casos de Teste

### Test Case 1: Register User
**Arquivo:** `register-user.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and email address
7. Click 'Signup' button
8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
9. Fill details: Title, Name, Email, Password, Date of birth
10. Select checkbox 'Sign up for our newsletter!'
11. Select checkbox 'Receive special offers from our partners!'
12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
13. Click 'Create Account button'
14. Verify that 'ACCOUNT CREATED!' is visible
15. Click 'Continue' button
16. Verify that 'Logged in as username' is visible
17. Click 'Delete Account' button
18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

---

### Test Case 2: Login User with correct email and password
**Arquivo:** `login-user-correct.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Delete Account' button
10. Verify that 'ACCOUNT DELETED!' is visible

---

### Test Case 3: Login User with incorrect email and password
**Arquivo:** `login-user-incorrect.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter incorrect email address and password
7. Click 'login' button
8. Verify error 'Your email or password is incorrect!' is visible

---

### Test Case 4: Logout User
**Arquivo:** `logout-user.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'Login to your account' is visible
6. Enter correct email address and password
7. Click 'login' button
8. Verify that 'Logged in as username' is visible
9. Click 'Logout' button
10. Verify that user is navigated to login page

---

### Test Case 5: Register User with existing email
**Arquivo:** `register-existing-email.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Signup / Login' button
5. Verify 'New User Signup!' is visible
6. Enter name and already registered email address
7. Click 'Signup' button
8. Verify error 'Email Address already exist!' is visible

---

### Test Case 6: Contact Us Form
**Arquivo:** `contact-us-form.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Contact Us' button
5. Verify 'GET IN TOUCH' is visible
6. Enter name, email, subject and message
7. Upload file
8. Click 'Submit' button
9. Click OK button
10. Verify success message 'Success! Your details have been submitted successfully.' is visible
11. Click 'Home' button and verify that landed to home page successfully

---

### Test Case 8: Verify All Products and product detail page
**Arquivo:** `verify-products.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. The products list is visible
7. Click on 'View Product' of first product
8. User is landed to product detail page
9. Verify that detail is visible: product name, category, price, availability, condition, brand

---

### Test Case 9: Search Product
**Arquivo:** `search-product.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click on 'Products' button
5. Verify user is navigated to ALL PRODUCTS page successfully
6. Enter product name in search input and click search button
7. Verify 'SEARCHED PRODUCTS' is visible
8. Verify all the products related to search are visible

---

### Test Case 10: Verify Subscription in home page
**Arquivo:** `verify-subscription.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Scroll down to footer
5. Verify text 'SUBSCRIPTION'
6. Enter email address in input and click arrow button
7. Verify success message 'You have been successfully subscribed!' is visible

---

### Test Case 15: Place Order: Register before Checkout
**Arquivo:** `place-order-register-checkout.cy.js`

**Passos:**
1. Launch browser
2. Navigate to url 'http://automationexercise.com'
3. Verify that home page is visible successfully
4. Click 'Signup / Login' button
5. Fill all details in Signup and create account
6. Verify 'ACCOUNT CREATED!' and click 'Continue' button
7. Verify 'Logged in as username' at top
8. Add products to cart
9. Click 'Cart' button
10. Verify that cart page is displayed
11. Click Proceed To Checkout
12. Verify Address Details and Review Your Order
13. Enter description in comment text area and click 'Place Order'
14. Enter payment details: Name on Card, Card Number, CVC, Expiration date
15. Click 'Pay and Confirm Order' button
16. Verify success message 'Your order has been placed successfully!'
17. Click 'Delete Account' button
18. Verify 'ACCOUNT DELETED!' and click 'Continue' button

---

## 📊 Resumo dos Testes

| # | Caso de Teste | Arquivo | Status |
|---|---------------|---------|--------|
| 1 | Register User | `register-user.cy.js` | ✅ |
| 2 | Login User with correct credentials | `login-user-correct.cy.js` | ✅ |
| 3 | Login User with incorrect credentials | `login-user-incorrect.cy.js` | ✅ |
| 4 | Logout User | `logout-user.cy.js` | ✅ |
| 5 | Register User with existing email | `register-existing-email.cy.js` | ✅ |
| 6 | Contact Us Form | `contact-us-form.cy.js` | ✅ |
| 8 | Verify All Products and product detail page | `verify-products.cy.js` | ✅ |
| 9 | Search Product | `search-product.cy.js` | ✅ |
| 10 | Verify Subscription in home page | `verify-subscription.cy.js` | ✅ |
| 15 | Place Order: Register before Checkout | `place-order-register-checkout.cy.js` | ✅ |

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a [licença MIT](LICENSE).

## 👥 Autor

**Goku - João Vitor dos Santos**

- GitHub: [@QAkarotto](https://github.com/QAkarotto)
- Projeto desenvolvido como trabalho final da Pós-Graduação em Automação de Testes - PGATS

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

---

⭐ Se este projeto foi útil, deixe uma estrela!
