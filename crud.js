export async function inserirfuncionario(conexao,inserir){
    await conexao('funcionarios').insert(inserir);
    console.log('Funcionário inserido com sucesso!');
}
export async function inserirUsuarios(conexao,inserir){
    await conexao('Usuarios').insert(inserir);
    console.log('Usuarios inserido com sucesso!');
}
export async function inserirfornecedor(conexao,inserir){
    await conexao('fornecedores').insert(inserir);
    console.log('Fornecedor inserido com sucesso!');
}
export async function inserircliente(conexao,inserir){
    await conexao('cliente').insert(inserir);
    console.log('Cliente inserido com sucesso!');
}
export async function inserirvendas(conexao,inserir){
    await conexao('vendas').insert(inserir);
    console.log('Venda inserida com sucesso!');
}

export async function consultarfuncionarios(conexao,filtro){
    const dados = await conexao.select().from('funcionarios').where(filtro);
    console.log(dados);
}