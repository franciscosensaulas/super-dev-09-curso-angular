/*
Exercício: Criar um CRUD básico de Clientes com múltiplas páginas, persistindo no localStorage.

Objetivo:
Criar um CRUD de clientes seguindo o mesmo formato utilizado no CRUD de produtos.
O projeto deve ter páginas separadas para:
- cadastrar
- listar
- editar

Os dados devem ser persistidos no localStorage.

Estrutura esperada:
src/app
    clientes
        cliente-cadastrar
        cliente-listar
        cliente-editar



======================================================================
ETAPA 15 - Implementar o salvar da edição
======================================================================

O que fazer:
1. Consultar a lista de clientes do localStorage.
2. Encontrar o índice do cliente que está sendo editado.
3. Alterar os dados desse cliente dentro da lista.
4. Persistir novamente a lista no localStorage.
5. Mostrar uma mensagem de sucesso.
6. Navegar de volta para a listagem.

Referência no CRUD de produtos:
- Arquivo: src/app/produtos/produto-editar/produto-editar.ts
- Linhas: 49 até 63
- Observar principalmente:
  - método salvar()
  - busca do item pelo id
  - alteração dos campos
  - JSON.stringify
  - localStorage.setItem
  - navegação para a listagem após salvar

Referência do método que carrega a lista:
- Arquivo: src/app/produtos/produto-editar/produto-editar.ts
- Linhas: 65 até 73
- Observar:
  - como consultar a lista do localStorage
  - como tratar quando não houver dados

======================================================================
ETAPA 16 - Ajustar a navbar
======================================================================

O que fazer:
1. Adicionar na navbar um link para a tela principal dos clientes.
2. Seguir a mesma ideia do link já existente para produtos.
3. A navbar deve facilitar o acesso ao novo CRUD.

Referência no CRUD de produtos:
- Arquivo: src/app/navbar/navbar.html
- Linha: 9
- Observar:
  - como foi criado o link para produtos

Referência do componente da navbar:
- Arquivo: src/app/navbar/navbar.ts
- Linhas: 1 até 10
- Observar:
  - estrutura simples do componente
  - importação de RouterLink

======================================================================
ETAPA 17 - Testar o fluxo completo
======================================================================

O que fazer:
1. Entrar na listagem de clientes.
2. Clicar em "Cadastrar Cliente".
3. Preencher os campos e salvar.
4. Voltar para a listagem e verificar se o cliente aparece.
5. Clicar em editar e alterar os dados.
6. Salvar a edição e voltar para a listagem.
7. Apagar um cliente.
8. Recarregar a página e verificar se os dados continuam salvos no localStorage.

Referências que ajudam a revisar o fluxo completo:
- Cadastro:
  - Arquivo: src/app/produtos/produto-cadastrar/produto-cadastrar.ts
  - Linhas: 19 até 38
- Listagem:
  - Arquivo: src/app/produtos/produto-listar/produto-listar.ts
  - Linhas: 12 até 62
- Edição:
  - Arquivo: src/app/produtos/produto-editar/produto-editar.ts
  - Linhas: 20 até 73
- Rotas:
  - Arquivo: src/app/app.routes.ts
  - Linhas: 9 até 15

======================================================================
ETAPA 18 - Resultado final esperado
======================================================================

Ao final do exercício o aluno deve ter:
- modelo de cliente criado
- rota de cadastro criada
- rota de listagem criada
- rota de edição criada
- tela de cadastro funcionando
- tela de listagem funcionando
- tela de edição funcionando
- ação de apagar funcionando
- persistência no localStorage funcionando
- navegação entre páginas funcionando

======================================================================
DESAFIO EXTRA (opcional)
======================================================================

Se terminar antes, fazer:
1. Mostrar na listagem a quantidade total de clientes cadastrados.
2. Ordenar os clientes pelo nome antes de apresentar.
3. Mostrar uma mensagem quando não houver clientes cadastrados.
4. Após salvar no cadastro, navegar automaticamente para a listagem.
5. Após apagar, manter a listagem atualizada na tela.

Referência no CRUD de produtos:
- Quantidade na listagem:
  - Arquivo: src/app/produtos/produto-listar/produto-listar.html
  - Linha: 5
- Ordenação:
  - Arquivo: src/app/produtos/produto-listar/produto-listar.ts
  - Linha: 37
- Navegação após editar:
  - Arquivo: src/app/produtos/produto-editar/produto-editar.ts
  - Linha: 62

Importante:
- Seguir a mesma forma que foi utilizada no CRUD de produtos.
- Não alterar a arquitetura que foi usada em aula.
- O objetivo é repetir o mesmo padrão em outro cadastro para fixar o conteúdo.
*/