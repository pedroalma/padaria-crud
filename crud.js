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
export async function inserirprodutos(conexao,inserir){
    await conexao('produtos').insert(inserir);
    console.log('Produto inserido com sucesso!');
}
//////// Consultas ////////
export async function consultarUsuarios(conexao,filtro){
    const dados = await conexao.select().from('Usuarios').where(filtro);
    console.log(dados);
}
export async function consultarfuncionarios(conexao,filtro){
    const dados = await conexao.select().from('funcionarios').where(filtro);
    console.log(dados);
}
export async function consultarfornecedores(conexao,filtro){
    const dados = await conexao.select().from('fornecedores').where(filtro);
    console.log(dados);
}
export async function consultarCliente(conexao,filtro){
    const dados = await conexao.select().from('cliente').where(filtro);
    console.log(dados);
}
export async function consultarVendas(conexao,filtro){
    const dados = await conexao.select().from('vendas').where(filtro);
    console.log(dados);
}
export async function consultarProdutos(conexao,filtro){
    const dados = await conexao.select().from('produtos').where(filtro);
    console.log(dados);
}
export async function deleteUsuario(conexao,filtro){
    const dados = await conexao.select('codUsu').from('Usuarios').where(filtro).del();
    console.log('Usuário deletado com sucesso!');
}
export async function deletefuncionarios(conexao,filtro){
    const dados = await conexao.select('codfun').from('funcionarios').where(filtro).del();
    console.log('Usuário deletado com sucesso!');
}
export async function deletefornecedores(conexao,filtro){
    const dados = await conexao.select('codfor').from('fornecedores').where(filtro).del();
    console.log('Usuário deletado com sucesso!');
}
export async function deletevendas(conexao,filtro){
    const dados = await conexao.select('codven').from('vendas').where(filtro).del();
    console.log('Usuário deletado com sucesso!');
}
export async function deletprodutos(conexao,filtro){
    const dados = await conexao.select('codpro').from('produtos').where(filtro).del();
    console.log('Usuário deletado com sucesso!');
}
////////////

export async function alterarUsuarios(conexao, ondeAlterar, oQueAlterar) {
    await conexao('Usuarios').where(ondeAlterar).update(oQueAlterar);
    console.log("Dados alterados ....");
}

export async function alterarfuncionarios(conexao, ondeAlterar, oQueAlterar) {
    await conexao('funcionarios').where(ondeAlterar).update(oQueAlterar);
    console.log("Dados alterados ....");
}
export async function alterarfornecedores(conexao, ondeAlterar, oQueAlterar) {
    await conexao('fornecedores').where(ondeAlterar).update(oQueAlterar);
    console.log("Dados alterados ....");
}
export async function alterarcliente(conexao, ondeAlterar, oQueAlterar) {
    await conexao('cliente').where(ondeAlterar).update(oQueAlterar);
    console.log("Dados alterados ....");
}
export async function alterarvendas(conexao, ondeAlterar, oQueAlterar) {
    await conexao('vendas').where(ondeAlterar).update(oQueAlterar);
    console.log("Dados alterados ....");
}
export async function alterarprodutos(conexao, ondeAlterar, oQueAlterar) {
    await conexao('produtos').where(ondeAlterar).update(oQueAlterar);
    console.log("Dados alterados ....");
}