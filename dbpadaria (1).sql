-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/12/2025 às 15:52
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbpadaria`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cliente`
--

CREATE TABLE `cliente` (
  `codcli` int(10) UNSIGNED NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `endereco` varchar(150) NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `cliente`
--

INSERT INTO `cliente` (`codcli`, `nome`, `telefone`, `email`, `endereco`, `usuario_id`) VALUES
(1, 'Maria Souza', '(11)99876-5432', 'maria@gmail.com', 'Avenida B, 456, Rio de Janeiro, RJ', 1),
(2, 'Maria Souza', '(11)99876-5432', 'maria@gmail.com', 'Avenida B, 456, Rio de Janeiro, RJ', 1),
(3, 'Maria Souza', '(11)91234-5678', 'maria@gmail.com', 'Avenida D, 101, Salvador, BA', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `fornecedores`
--

CREATE TABLE `fornecedores` (
  `codfor` int(10) UNSIGNED NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(50) NOT NULL,
  `endereco` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `fornecedores`
--

INSERT INTO `fornecedores` (`codfor`, `nome`, `telefone`, `email`, `endereco`) VALUES
(1, 'Fornecedor X', '(11)91234-5678', 'fornecedorX@gmail.com', 'Rua A, 123, São Paulo, SP'),
(3, 'Fornecedor X', '(11)93456-7890', 'fornecedorX@gmail.com', 'Rua C, 789, Belo Horizonte, MG');

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `codfun` int(10) UNSIGNED NOT NULL,
  `nome` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cpf` varchar(14) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `funcionarios`
--

INSERT INTO `funcionarios` (`codfun`, `nome`, `email`, `cpf`, `telefone`, `senha`) VALUES
(1, 'João Silva', 'João@gmail.com', '123.456.789-00', '(11)98765-4321', 'joao123'),
(3, 'Carlos Pereira', 'João@gmail.com', '123.456.789-00', '(11)97654-3210', 'joao123');

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `codpro` int(10) UNSIGNED NOT NULL,
  `nome` varchar(100) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `quantidade_estoque` int(11) NOT NULL,
  `fornecedor_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`codpro`, `nome`, `descricao`, `preco`, `quantidade_estoque`, `fornecedor_id`) VALUES
(1, 'Pão Francês', 'Pão', 0.50, 100, 1),
(3, 'Pão Francês', 'Pão', 0.55, 120, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `codUsu` int(10) UNSIGNED NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`codUsu`, `nome`, `email`, `senha`) VALUES
(1, 'admin', 'admin@gmail.com', 'admin123'),
(3, 'Pedro Silva', 'Silva@gmail.com', 'admin123');

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas`
--

CREATE TABLE `vendas` (
  `codven` int(10) UNSIGNED NOT NULL,
  `data_venda` date NOT NULL,
  `valor_total` decimal(10,2) NOT NULL,
  `cliente_id` int(10) UNSIGNED NOT NULL,
  `funcionario_id` int(10) UNSIGNED NOT NULL,
  `fornecedor_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `vendas`
--

INSERT INTO `vendas` (`codven`, `data_venda`, `valor_total`, `cliente_id`, `funcionario_id`, `fornecedor_id`) VALUES
(1, '2024-06-15', 1500.00, 1, 1, 1),
(3, '2024-06-15', 1750.00, 1, 1, 1);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`codcli`),
  ADD KEY `cliente_usuario_id_foreign` (`usuario_id`);

--
-- Índices de tabela `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`codfor`);

--
-- Índices de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`codfun`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`codpro`),
  ADD KEY `produtos_fornecedor_id_foreign` (`fornecedor_id`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`codUsu`);

--
-- Índices de tabela `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`codven`),
  ADD KEY `vendas_cliente_id_foreign` (`cliente_id`),
  ADD KEY `vendas_funcionario_id_foreign` (`funcionario_id`),
  ADD KEY `vendas_fornecedor_id_foreign` (`fornecedor_id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cliente`
--
ALTER TABLE `cliente`
  MODIFY `codcli` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `fornecedores`
--
ALTER TABLE `fornecedores`
  MODIFY `codfor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `codfun` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `codpro` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `codUsu` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `vendas`
--
ALTER TABLE `vendas`
  MODIFY `codven` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `cliente`
--
ALTER TABLE `cliente`
  ADD CONSTRAINT `cliente_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`codUsu`);

--
-- Restrições para tabelas `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_fornecedor_id_foreign` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedores` (`codfor`);

--
-- Restrições para tabelas `vendas`
--
ALTER TABLE `vendas`
  ADD CONSTRAINT `vendas_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `cliente` (`codcli`),
  ADD CONSTRAINT `vendas_fornecedor_id_foreign` FOREIGN KEY (`fornecedor_id`) REFERENCES `fornecedores` (`codfor`),
  ADD CONSTRAINT `vendas_funcionario_id_foreign` FOREIGN KEY (`funcionario_id`) REFERENCES `funcionarios` (`codfun`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
