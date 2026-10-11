# Desafio Técnico QA — Happmobi

Projeto desenvolvido como parte de um desafio técnico para a posição de Analista de QA, com foco em testes exploratórios, análise de riscos e automação de testes de interface web utilizando Cypress.

## Objetivo

Validar funcionalidades do módulo de usuários da plataforma HappLearning, verificando comportamentos esperados, validações de formulários, pesquisa de registros e possíveis inconsistências.

Como exploração complementar, também foram realizados testes na funcionalidade de importação de turmas.

## Tecnologias utilizadas

- JavaScript
- Cypress
- Node.js e npm
- Git e GitHub
- GitHub Actions (CI)

## Cenários automatizados

| ID | Cenário | Tipo |
|---|---|---|
| Login | Autenticação com credenciais válidas | Positivo |
| CT-001 | Cadastrar usuário com dados válidos | Positivo |
| CT-002 | Validar obrigatoriedade do campo Nome | Negativo |
| CT-013 | Pesquisar usuário existente | Positivo |
| CT-029 | Pesquisar usuário inexistente | Negativo |
| CT-027 | Baixar modelo de importação de turmas | Positivo |
| CT-028 | Carregar arquivo e validar mensagem de sucesso | Positivo |

**Total: 7 testes automatizados, distribuídos em 4 arquivos de especificação.**

Na última execução completa local, os 7 testes foram aprovados, sem falhas, em aproximadamente 42 segundos.

## Estrutura do projeto

```text
.github/
└── workflows/
    └── cypress.yml

cypress/
├── e2e/
│   ├── cadastroUsuario.cy.js
│   ├── importacaoTurmas.cy.js
│   ├── listagemUsuario.cy.js
│   └── login.cy.js
├── fixtures/
│   ├── usuarios.json
│   └── Carga1_Turmas.xlsx
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
README.md
```

## Pré-requisitos

- Node.js e npm
- Acesso autorizado ao ambiente de testes HappLearning

## Configuração

1. Clone o repositório:

```bash
git clone https://github.com/KenjiYonea/happmobi-qa.git
```

2. Acesse o diretório:

```bash
cd happmobi-qa
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `cypress.env.json` na raiz do projeto:

```json
{
  "username": "SEU_USUARIO",
  "password": "SUA_SENHA"
}
```

O arquivo contém credenciais do ambiente de testes e não deve ser versionado. Ele deve permanecer no `.gitignore`.

## Executando os testes

**Modo interativo:**

```bash
npx cypress open
```

**Executar toda a suíte:**

```bash
npx cypress run
```

**Executar apenas os testes de login:**

```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

**Executar apenas os testes de cadastro:**

```bash
npx cypress run --spec "cypress/e2e/cadastroUsuario.cy.js"
```

**Executar apenas os testes de listagem:**

```bash
npx cypress run --spec "cypress/e2e/listagemUsuario.cy.js"
```

**Executar apenas os testes de importação:**

```bash
npx cypress run --spec "cypress/e2e/importacaoTurmas.cy.js"
```

**Executar com gravação de vídeo:**

```bash
npx cypress run --config video=true
```

## Integração contínua — GitHub Actions

O projeto possui um workflow de integração contínua configurado no arquivo `.github/workflows/cypress.yml`.

O workflow está preparado para executar os testes Cypress automaticamente em pushes e pull requests direcionados à branch `main`, além de permitir execução manual.

As credenciais do ambiente devem ser configuradas nos GitHub Actions Secrets:

- `CYPRESS_USERNAME`
- `CYPRESS_PASSWORD`

As variáveis são disponibilizadas ao Cypress durante a execução, sem necessidade de versionar credenciais.

Em caso de falha, o workflow está configurado para disponibilizar screenshots e vídeos gerados durante a execução, quando existirem.

**Observação:** a execução do workflow no GitHub Actions ainda precisa ser confirmada. A aprovação dos testes mencionada neste documento refere-se à execução local.

## Estratégia de automação

A automação foi direcionada aos fluxos de autenticação, cadastro, pesquisa de usuários e importação de turmas.

Foram priorizados cenários relevantes para o funcionamento da aplicação, incluindo testes positivos e negativos.

No cadastro, foram automatizados o registro de usuário válido e a obrigatoriedade do campo Nome.

Na listagem, foram contempladas pesquisas de usuários existentes e inexistentes.

Na importação de turmas, foram automatizados o download do modelo e o processamento de uma planilha, com validação da mensagem de sucesso.

O teste de login complementa a cobertura da autenticação e o acesso às funcionalidades protegidas.

## Testes exploratórios e análise de riscos

Além da automação, foram realizados testes exploratórios envolvendo validações cadastrais, duplicidade de informações, campos obrigatórios, datas e funcionalidades administrativas.

A documentação foi organizada em quatro abas:

- Casos de teste
- Achados da exploração
- Riscos e prioridade
- Resumo e entrega

Os defeitos identificados foram registrados em relatório separado, contendo descrição, passos de reprodução, resultados esperados e obtidos, impacto e evidências.

## Limitações e observações

Algumas validações, como regras de CPF, datas futuras e informações complementares de gestores, dependem de confirmação das regras de negócio.

Na importação de turmas, a mensagem de sucesso indica o processamento do arquivo, mas não comprova a execução individual das operações. A ausência de informações na coluna STATUS do arquivo de retorno foi registrada como BUG-008.

A automação não representa cobertura integral das funcionalidades do sistema.

## Evidências

As evidências incluem capturas de tela, resultados das execuções e vídeos gerados pelo Cypress.

Arquivos gerados automaticamente podem permanecer fora do versionamento, conforme configuração do `.gitignore`.

## Repositório

https://github.com/KenjiYonea/happmobi-qa