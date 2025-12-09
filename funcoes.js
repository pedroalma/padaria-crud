export async function criarTabelaUsuarios(conexao){
    const existe = await conexao.schema.hasTable('Usuarios');
    if(!existe){
        await conexao.schema.createTable('Usuarios', tabela =>  {
            tabela.increments('codUsu').primary().unsigned().notNullable();
            tabela.string('nome', 50).notNullable();
            tabela.string('email', 50).notNullable();
            tabela.string('senha', 100).notNullable();
        });
        console.log('Tabela Usuarios criada com sucesso!');   
    }else{
        console.log('Tabela Usuarios já existe.');
    }
}
export async function criarTabelaFuncionarios(conexao){
    const existe = await conexao.schema.hasTable('funcionarios');
    if(!existe){
        await conexao.schema.createTable('funcionarios', tabela =>  {
            tabela.increments('codfun').primary().unsigned().notNullable();
            tabela.string('nome', 30).notNullable();
            tabela.string('email', 50).notNullable();
            tabela.string('cpf', 14).notNullable();
            tabela.string('telefone', 15).notNullable();
            tabela.string('senha', 100).notNullable();
        });
        console.log('Tabela funcionarios criada com sucesso!');
    }else{
        console.log('Tabela funcionarios já existe.');
    }    
}
export async function criarTabelaFornecedores(conexao){
    const existe = await conexao.schema.hasTable('fornecedores');
    if(!existe){
        await conexao.schema.createTable('fornecedores', tabela =>  {
            tabela.increments('codfor').primary().unsigned().notNullable();
            tabela.string('nome', 100).notNullable();
            tabela.string('telefone', 15).notNullable();
            tabela.string('email', 50).notNullable();
            tabela.string('endereco', 150).notNullable();
        });
        console.log('Tabela fornecedores criada com sucesso!');
    }else{
        console.log('Tabela fornecedores já existe.');
    }
}
export async function criarTabelaCliente(conexao){
    const existe = await conexao.schema.hasTable('cliente');
    if(!existe){
        await conexao.schema.createTable('cliente', tabela =>  {
            tabela.increments('codcli').primary().unsigned().notNullable();
            tabela.string('nome', 100).notNullable();
            tabela.string('telefone', 15).notNullable();
            tabela.string('email', 50).notNullable();
            tabela.string('endereco', 150).notNullable();
            tabela.integer('usuario_id').unsigned().notNullable().references('codUsu').inTable('Usuarios');
        });
        console.log('Tabela cliente criada com sucesso!');
    }else{
        console.log('Tabela cliente já existe.');
    }
}
export async function criarTabelaVendas(conexao){
    const existe = await conexao.schema.hasTable('vendas');
    if(!existe){
        await conexao.schema.createTable('vendas', tabela =>  {
            tabela.increments('codven').primary().unsigned().notNullable();
            tabela.date('data_venda').notNullable();
            tabela.decimal('valor_total', 10, 2).notNullable();
            tabela.integer('cliente_id').unsigned().notNullable().references('codcli').inTable('cliente');
            tabela.integer('funcionario_id').unsigned().notNullable().references('codfun').inTable('funcionarios');
            tabela.integer('fornecedor_id').unsigned().notNullable().references('codfor').inTable('fornecedores');
        });
        console.log('Tabela vendas criada com sucesso!');
    }else{
        console.log('Tabela vendas já existe.');
    }
}