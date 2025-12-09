import knex from "knex";
import knexfile from "./knexfile.js";
import {criarTabelaCliente,criarTabelaFornecedores,criarTabelaUsuarios,criarTabelaVendas,criarTabelaFuncionarios} from "./funcoes.js";

const conexao = knex(knexfile);

await criarTabelaUsuarios(conexao);
await criarTabelaFuncionarios(conexao);
await criarTabelaFornecedores(conexao);
await criarTabelaCliente(conexao);
await criarTabelaVendas(conexao);

conexao.destroy();