# Instruções de Instalação e Execução

## Instalação Rápida

```bash
# 1. Instalar dependências
npm install

# 2. Executar testes no modo interativo
npm run cy:open

# 3. Executar todos os testes (headless)
npm test

# 4. Gerar relatório HTML
npm run test:report
```

## Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run cy:open` | Abre interface gráfica do Cypress |
| `npm run cy:run` | Executa testes em modo headless |
| `npm test` | Alias para cy:run |
| `npm run cy:run:chrome` | Executa testes no Chrome |
| `npm run cy:run:firefox` | Executa testes no Firefox |
| `npm run cy:run:headed` | Executa com interface visível |
| `npm run test:report` | Gera relatórios HTML completos |
| `npm run merge:reports` | Mescla relatórios JSON |
| `npm run generate:report` | Gera HTML a partir do JSON |

## Estrutura de Relatórios

Após executar `npm run test:report`:

- **HTML Report**: `cypress/reports/html/report.html`
- **JSON Report**: `cypress/reports/merged-report.json`
- **Screenshots**: `cypress/screenshots/` (apenas em falhas)
- **Videos**: `cypress/videos/`

## Executar Teste Específico

```bash
# Via interface
npm run cy:open
# Selecione o arquivo de teste desejado

# Via terminal
npx cypress run --spec "cypress/e2e/register-user.cy.js"
```

## Troubleshooting

### Erro ao instalar dependências
```bash
# Limpar cache do npm
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Cypress não abre
```bash
# Verificar instalação do Cypress
npx cypress verify

# Reinstalar Cypress
npm install cypress --force
```

### Testes falhando por timeout
Aumentar timeout em `cypress.config.js`:
```javascript
defaultCommandTimeout: 15000,
pageLoadTimeout: 45000,
```
