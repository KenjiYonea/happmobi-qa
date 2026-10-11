describe("Listagem de Usuários", () => {
    beforeEach(() => {
        cy.login();
        cy.visit("/app/admin/usuarios/listagem");
    });

    it("Deve pesquisar um usuário existente", () => {
        const usuario = 'teste@emai.10108';

        cy.get('input[placeholder="Pesquisar"]')
            .should('be.visible')
            .clear()
            .type(usuario);

        cy.contains(usuario, { timeout: 10000 })
    });

    it('Deve informar quando o usuário não for encontrado', () => {

        cy.get('input[placeholder="Pesquisar"]')
            .should('be.visible')
            .clear()
            .type('aaa');

        cy.contains('span', 'NENHUM DADO ENCONTRADO', {
            timeout: 10000
        }).should('be.visible');

    });
});