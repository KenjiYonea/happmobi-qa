
describe("Cadastro de Usuários", () => {
    beforeEach(() => {
        cy.login();
        cy.visit("/app/admin/usuarios/listagem");
    });

    it("CT-001 - Deve cadastrar um usuário com sucesso", () => {
        cy.contains("button", "Adicionar usuário")
            .should("be.visible")
            .click();

        cy.url().should("include", "/app/admin/usuarios/listagem/criar");

        // Carregar massa de teste da Fixture
        cy.fixture("usuarios").then((dados) => {
            const id = Date.now().toString().slice(-8);

            const usuario = {
                ...dados.usuarioValido,
                nome: `QA ${id}`,
                email: `qa${id}@email.com`
            };

            // Preencher os campos válidos do formulário
            cy.get('input[placeholder="Nome"]')
                .should("be.visible")
                .type(usuario.nome)
                .should("have.value", usuario.nome);

            cy.get('input[placeholder="E-mail"]')
                .should("be.visible")
                .type(usuario.email)
                .should("have.value", usuario.email);

            cy.get("#password-password")
                .should("be.visible")
                .type(usuario.senha, { log: false })
                .should("have.value", usuario.senha);

            // Validar força da senha
            cy.contains("Senha forte")
                .should("be.visible");

            cy.screenshot("CT-001-Dados do formulario");

            // Salvar usuário
            cy.contains("button", "Salvar")
                .should("be.visible")
                .and("be.enabled")
                .click();

            // Validar mensagem de sucesso
            cy.get("#swal2-title")
                .should("be.visible")
                .and("have.text", "Sucesso");

            cy.get("#swal2-html-container")
                .should("be.visible")
                .and("contain.text", "Usuário criado com sucesso!");

            cy.screenshot("CT-001-cadastro-sucesso");

            // Confirmar mensagem de sucesso
            cy.get("button.swal2-confirm")
                .click();

            // Validar retorno à listagem
            cy.url()
                .should("include", "/app/admin/usuarios/listagem");

            cy.url()
                .should("not.include", "/listagem/criar");

            // Validar carregamento da listagem
            cy.contains("button", "Adicionar usuário")
                .should("be.visible");

            // Validar usuário cadastrado na listagem
            cy.get("tr[mat-row]")
                .contains("td", usuario.email)
                .should("be.visible");
        });
    });

    it("CT-002 - Não deve cadastrar usuário sem nome", () => {
        cy.contains("button", "Adicionar usuário")
            .should("be.visible")
            .click();

        cy.url().should("include", "/listagem/criar");

        // Gerar e-mail único
        const id = Date.now().toString().slice(-8);

        const usuario = {
            email: `qa${id}@example.com`,
            senha: "Teste@12345"
        };

        // Nome permanece vazio
        cy.get('input[placeholder="Nome"]')
            .should("be.visible")
            .and("have.value", "");

        // Preencher e-mail
        cy.get('input[placeholder="E-mail"]')
            .type(usuario.email)
            .should("have.value", usuario.email);

        // Preencher senha
        cy.get("#password-password")
            .type(usuario.senha, { log: false })
            .should("have.value", usuario.senha);

        // Validar senha forte
        cy.contains("Senha forte")
            .should("be.visible");

        // Retirar o foco do campo de senha
        cy.get("#password-password")
            .blur();

        cy.screenshot("CT-001-Dados do formulario");
        
        // Tentar cadastrar usuário sem nome
        cy.get('[data-testid="button-salvar"]')
            .scrollIntoView()
            .should("be.visible")
            .and("be.enabled")
            .click();

        // Validar mensagem de erro
        cy.get("#swal2-html-container")
            .should("be.visible")
            .and("contain.text", "Nome é obrigatório");

        cy.screenshot("CT-002-nome-obrigatorio");
    });
});
