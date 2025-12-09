import knex from "knex";
import knexfile from "./knexfile.js";
import {criarTabelaCliente,criarTabelaFornecedores,criarTabelaUsuarios,criarTabelaVendas,criarTabelaFuncionarios} from "./funcoes.js";
import {inserirUsuarios,inserirfuncionario,inserirfornecedor,inserircliente,inserirvendas,consultarfuncionarios} from "./crud.js";
const conexao = knex(knexfile);

await criarTabelaUsuarios(conexao);
await criarTabelaFuncionarios(conexao);
await criarTabelaFornecedores(conexao);
await criarTabelaCliente(conexao);
await criarTabelaVendas(conexao);

await inserirUsuarios(conexao,{nome:'admin',email:'admin@gmail.com',senha:'admin123'});
await inserirfuncionario(conexao,{nome:'João Silva',email:'João@gmail.com',cpf:'123.456.789-00',telefone:'(11)98765-4321',senha:'joao123'});
await inserirfornecedor(conexao,{nome:'Fornecedor X',telefone:'(11)91234-5678',email:'fornecedorX@gmail.com',endereco:'Rua A, 123, São Paulo, SP'});
await inserircliente(conexao,{nome:'Maria Souza',telefone:'(11)99876-5432',email:'maria@gmail.com',endereco:'Avenida B, 456, Rio de Janeiro, RJ',usuario_id:1});
await inserirvendas(conexao,{data_venda:'2024-06-15',valor_total:1500.00,cliente_id:1,funcionario_id:1,fornecedor_id:1});
await consultarfuncionarios(conexao,{codfun:1});


conexao.destroy();