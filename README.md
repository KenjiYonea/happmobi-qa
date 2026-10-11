# Desafio Técnico QA — Happmobi

Projeto desenvolvido como parte de um desafio técnico para a posição de Analista de QA, com foco em testes exploratórios e automação de testes de interface web utilizando Cypress.

## Objetivo

Validar funcionalidades do módulo de usuários da plataforma HappLearning, verificando comportamentos esperados, validações de formulário e possíveis inconsistências.

## Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js e npm
- Git e GitHub

## Cenários automatizados

| ID | Cenário | Resultado |
|---|---|---|
| CT-001 | Cadastrar usuário com dados válidos | Aprovado |
| CT-002 | Validar obrigatoriedade do campo Nome | Aprovado |

Os cenários foram executados conjuntamente no Cypress, com 2 testes aprovados na última execução registrada.

## Estrutura do projeto

```text
cypress/
├── e2e/
│   ├── cadastroUsuario.cy.js
│   └── login.cy.js
├── fixtures/
│   └── usuarios.json
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
README.md
```

## Pré-requisitos

- Node.js
- npm
- Acesso autorizado ao ambiente de testes da plataforma

## Configuração

1. Clone o repositório.
2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `cypress.env.json` na raiz do projeto, com suas credenciais de teste:

```json
{
  "username": "SEU_USUARIO",
  "password": "SUA_SENHA"
}
```

O arquivo de credenciais está incluído no `.gitignore` e não deve ser versionado.

## Executando os testes

Modo interativo:

```bash
npx cypress open
```

Modo headless, executando os cenários de cadastro:

```bash
npx cypress run --spec "cypress/e2e/cadastroUsuario.cy.js"
```

## Estratégia de automação