describe('Importação de Turmas', () => {

    beforeEach(() => {
        cy.login();
        cy.visit('/app/admin/usuarios/carga-turmas');
    });

    it('Deve baixar o modelo de importação', () => {

        cy.get('a[download][href*="Carga_Turmas.xlsx"]')
            .should('be.visible')
            .click();

        cy.readFile('cypress/downloads/Carga_Turmas.xlsx', null, {
            timeout: 10000
        }).should('exist');

    });

    it('CT-028 - Deve carregar arquivo e validar mensagem de sucesso', () => {


        // Seleciona a planilha
        cy.get('input#content')
            .selectFile('cypress/fixtures/Carga1_Turmas.xlsx', {
                force: true
            });

        // Clica no botão Processar
        cy.contains('button', 'Processar')
            .should('be.visible')
            .click();

        // Valida a mensagem de sucesso
        cy.contains(
            'span.dictionary-text',
            'Arquivo processado com sucesso. Realizado download de status',
            { timeout: 15000 }
        ).should('be.visible');
    });

});