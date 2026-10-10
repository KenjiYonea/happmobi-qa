describe("Autenticação de Usuário", () => {
    it("Deve realizar login com sucesso", () => {
            cy.login();

            cy.visit("/app/home/canal/catalogo");

            cy.url().should(
                "include",
                "/app/home/canal/catalogo"
            );

        });
    });