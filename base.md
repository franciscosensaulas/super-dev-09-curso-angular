src/app
    produtos
        produto-cadastrar
        produto-listar
    clientes
        cliente-cadastrar
        cliente-listar

- ✅ Criar a interface de modelo
- ✅ Criar componente cadastro 'produto-cadastrar'
    - ✅ Adicionar rota no app.routes.ts
    - ✅ Adicionar na navbar o botão de acesso
    - ✅ TS
        - ✅ Importar FormsModule
        - ✅ Adicionar a propriedade do Modelo 
    - ✅ HTML
        - ✅ Campo de nome
        - ✅ Campo de preço unitário
        - ✅ Campo de estoque
        - ✅ Mostrar o valor total em tempo real
        - ✅ Botão de salvar chamando função de `salvar()`
    - ✅ TS
        - ✅ Implementar função de `salvar()`
        - ✅ Consultar do localStorage a lista de produtos
        - ✅ Adicionar na lista de produtos
        - ✅ Persistir no local storage
- ⌛ Criar componente lista 'produto-listar'
    - ✅ Adicionar rota
    - ✅ Adicionar botão na navbar, remover o botão de cadastro de produto da nav
    - ⌛ HTML
        - ✅ Botão 'Cadastrar Produto' que navega para a nova tela de cadastro
        - ✅ Tabela com colunas
            - ✅ Nome
            - ✅ Estoque
            - ✅ Preço Unitário
            - ⌛ Botões
                - ⌛ Editar (mais para frente vemos como vamos fazer)
                - ✅ Apagar (confirmação)
        - ⌛ OPCIONAL: Filtro de busca (nome)

- ⌛ Amazenar os clientes no LocalStorage