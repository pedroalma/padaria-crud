import knex from "knex";
import knexfile from "./knexfile.js";
import {criarTabelaCliente,criarTabelaFornecedores,criarTabelaUsuarios,criarTabelaVendas,criarTabelaFuncionarios,criarTabelaProdutos} from "./funcoes.js";
import {inserirUsuarios,inserirfuncionario,inserirfornecedor,inserircliente,inserirvendas,inserirprodutos,
        consultarUsuarios,consultarfuncionarios,consultarfornecedores,consultarCliente,consultarVendas,consultarProdutos,
        deleteUsuario,deletefuncionarios,deletefornecedores,deletevendas,deletprodutos,
        alterarUsuarios,alterarfuncionarios,alterarfornecedores,alterarcliente,alterarvendas,alterarprodutos
} from "./crud.js";
const conexao = knex(knexfile);

await criarTabelaUsuarios(conexao);
await criarTabelaFuncionarios(conexao);
await criarTabelaFornecedores(conexao);
await criarTabelaCliente(conexao);
await criarTabelaVendas(conexao);
await criarTabelaProdutos(conexao);

await inserirUsuarios(conexao,{nome:'admin',email:'admin@gmail.com',senha:'admin123'});
await inserirUsuarios(conexao,{nome:'admin',email:'admin@gmail.com',senha:'admin123'});
await inserirUsuarios(conexao,{nome:'pedro',email:'admin@gmail.com',senha:'admin123'});
await inserirfuncionario(conexao,{nome:'João Silva',email:'João@gmail.com',cpf:'123.456.789-00',telefone:'(11)98765-4321',senha:'joao123'});
await inserirfuncionario(conexao,{nome:'João Silva',email:'João@gmail.com',cpf:'123.456.789-00',telefone:'(11)98765-4321',senha:'joao123'});
await inserirfuncionario(conexao,{nome:'João Silva',email:'João@gmail.com',cpf:'123.456.789-00',telefone:'(11)98765-4321',senha:'joao123'});
await inserirfornecedor(conexao,{nome:'Fornecedor X',telefone:'(11)91234-5678',email:'fornecedorX@gmail.com',endereco:'Rua A, 123, São Paulo, SP'});
await inserirfornecedor(conexao,{nome:'Fornecedor X',telefone:'(11)91234-5678',email:'fornecedorX@gmail.com',endereco:'Rua A, 123, São Paulo, SP'});
await inserirfornecedor(conexao,{nome:'Fornecedor X',telefone:'(11)91234-5678',email:'fornecedorX@gmail.com',endereco:'Rua A, 123, São Paulo, SP'});
await inserircliente(conexao,{nome:'Maria Souza',telefone:'(11)99876-5432',email:'maria@gmail.com',endereco:'Avenida B, 456, Rio de Janeiro, RJ',usuario_id:1});
await inserircliente(conexao,{nome:'Maria Souza',telefone:'(11)99876-5432',email:'maria@gmail.com',endereco:'Avenida B, 456, Rio de Janeiro, RJ',usuario_id:1});
await inserircliente(conexao,{nome:'Maria Souza',telefone:'(11)99876-5432',email:'maria@gmail.com',endereco:'Avenida B, 456, Rio de Janeiro, RJ',usuario_id:1});
await inserirvendas(conexao,{data_venda:'2024-06-15',valor_total:1500.00,cliente_id:1,funcionario_id:1,fornecedor_id:1});
await inserirvendas(conexao,{data_venda:'2024-06-15',valor_total:1500.00,cliente_id:1,funcionario_id:1,fornecedor_id:1});
await inserirvendas(conexao,{data_venda:'2024-06-15',valor_total:1500.00,cliente_id:1,funcionario_id:1,fornecedor_id:1});
await inserirprodutos(conexao,{nome:'Pão Francês',descricao:'Pão',preco:0.50,quantidade_estoque:100,fornecedor_id:1});
await inserirprodutos(conexao,{nome:'Pão Francês',descricao:'Pão',preco:0.50,quantidade_estoque:100,fornecedor_id:1});
await inserirprodutos(conexao,{nome:'Pão Francês',descricao:'Pão',preco:0.50,quantidade_estoque:100,fornecedor_id:1});

await consultarUsuarios(conexao,{codUsu:1});
await consultarfuncionarios(conexao,{codfun:1});
await consultarfornecedores(conexao,{codfor:1});
await consultarCliente(conexao,{codcli:1});
await consultarVendas(conexao,{codven:1});
await consultarProdutos(conexao,{codpro:1});

await deleteUsuario(conexao,{codUsu:2});
await deletefuncionarios(conexao,{codfun:2});
await deletefornecedores(conexao,{codfor:2});
await deletevendas(conexao,{codven:2});
await deletprodutos(conexao,{codpro:2});

await alterarUsuarios(conexao,{codUsu:3},{ nome:'Pedro Silva', email:'Silva@gmail.com'});
await alterarfuncionarios(conexao,{codfun:3},{ nome:'Carlos Pereira', telefone:'(11)97654-3210'});
await alterarfornecedores(conexao,{codfor:3},{ telefone:'(11)93456-7890', endereco:'Rua C, 789, Belo Horizonte, MG'});
await alterarcliente(conexao,{codcli:3},{ telefone:'(11)91234-5678', endereco:'Avenida D, 101, Salvador, BA'});
await alterarvendas(conexao,{codven:3},{ valor_total:1750.00});
await alterarprodutos(conexao,{codpro:3},{ preco:0.55, quantidade_estoque:120});


conexao.destroy();