create database opto;
use opto;

CREATE TABLE `prescricao_oculos` (
  `idPrescricaoOculos` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `idPaciente` int NOT NULL,
  `idConsulta` int NOT NULL,
  `idEmpresa` int NOT NULL,
  `data` date,
  `od_esferico` varchar(11) DEFAULT NULL,
  `od_cilindrico` varchar(11) DEFAULT NULL,
  `od_eixo` varchar(11) DEFAULT NULL,
  `od_av` varchar(11) DEFAULT NULL,
  `oe_esferico` varchar(11) DEFAULT NULL,
  `oe_cilindrico` varchar(11) DEFAULT NULL,
  `oe_eixo` varchar(11) DEFAULT NULL,
  `oe_av` varchar(11) DEFAULT NULL,
  `adicao` varchar(11) DEFAULT NULL,
  `lente` varchar(20) DEFAULT NULL,
  `observacao` varchar(100) DEFAULT NULL
  
);
CREATE TABLE `consulta` (
`idConsulta` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
`idEmpresa` int NOT NULL,
`nomePaciente` varchar(50) NOT NULL,
`uuidPaciente` int NOT NULL,
`uuid` varchar(36) NOT NULL,
`data` date DEFAULT NULL,
`titulo` varchar(20) DEFAULT NULL
);



CREATE TABLE `paciente` (
  `idPaciente` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `idEmpresa` int NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `nomePaciente` varchar(50) NOT NULL,
  `cpf` varchar(30) DEFAULT NULL,
  `rg` varchar(30) DEFAULT NULL,
  `dataNascimento` varchar(30) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `endereco` varchar(50) DEFAULT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `estado` varchar(50) DEFAULT NULL,
  `telefone` varchar(30) DEFAULT NULL
);

CREATE TABLE `prescricao_lente` (
  `idPrescricaoOculos` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `idPaciente` int NOT NULL,
  `idConsulta` int NOT NULL,
  `idEmpresa` int NOT NULL,
  `data` date,
  `od_esferico` varchar(11) DEFAULT NULL,
  `od_cilindrico` varchar(11) DEFAULT NULL,
  `od_eixo` varchar(11) DEFAULT NULL,
  `od_av` varchar(11) DEFAULT NULL,
  `oe_esferico` varchar(11) DEFAULT NULL,
  `oe_cilindrico` varchar(11) DEFAULT NULL,
  `oe_eixo` varchar(11) DEFAULT NULL,
  `oe_av` varchar(11) DEFAULT NULL,
  `lente` varchar(20) DEFAULT NULL,
  `observacao` varchar(100) DEFAULT NULL
  
);

CREATE TABLE `clinica` (
  `idClinica` int NOT NULL PRIMARY KEY AUTO_INCREMENT, 
  `idEmpresa` int NOT NULL,
  `nomeClinica` va
) 

CREATE TABLE `agenda` (
  `idAgendamento` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `idPaciente` int NOT NULL,
  `idEmpresa` int NOT NULL,
  `idFormaPagamento` int NOT NULL DEFAULT 0,
  `idOticaParceira` int NOT NULL DEFAULT 0,
  `titulo` varchar(30) DEFAULT NULL,
  `data` date,
  `dataVencimento` date,
  `horario` varchar(10) DEFAULT '00:00',
  `procedimento` varchar(20) NOT NULL,
  `valorConsulta` decimal(12,2),
  `idConsulta` int DEFAULT 0,
  `dataPagamento` date,
  `atendido` boolean DEFAULT 0,
  `recebido` boolean DEFAULT 0,
  `observacao` varchar(80) DEFAULT NULL
);

CREATE TABLE `formaPagamento` (
  `idFormaPagamento` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `idEmpresa` int NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `descricao` varchar(50) NOT NULL
);

CREATE TABLE `oticaParceira` (
  `idOticaParceira` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `idEmpresa` int NOT NULL,
  `uuid` varchar(36) NOT NULL,
  `nome` varchar(50) NOT NULL
);

CREATE TABLE `procedimentos` (
  `idProcedimento` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `idEmpresa` int NOT NULL,
  `text` varchar(50) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
);

CREATE TABLE `despesa` (
  `idDespesa` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `idEmpresa` int NOT NULL,
  `descricaoDespesa` varchar(80) DEFAULT NULL,
  `data` date,
  `valor` decimal(12,2) DEFAULT NULL,
  `despesaPaga` boolean,
  `idFormaPagamento` int NOT NULL DEFAULT 0,
  `observacao` varchar(100) DEFAULT NULL
);

CREATE TABLE `receita` (
  `idReceita` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `uuid` varchar(36) NOT NULL,
  `idEmpresa` int NOT NULL,
  `descricaoReceita` varchar(80) DEFAULT NULL,
  `data` date,
  `valor` decimal(12,2) DEFAULT NULL,
  `receitaPaga` boolean,
  `idFormaPagamento` int NOT NULL DEFAULT 0,
  `observacao` varchar(100) DEFAULT NULL
);

CREATE TABLE `fichaClinica`(
  `idFichaClinica`  int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `idEmpresa` int NOT NULL,
  `idConsulta` int NOT NULL,
  `uuid` varchar(100) DEFAULT NULL,
  `idPaciente` int NOT NULL,
  `data` date,
  `json_fichaClinica` JSON
);

CREATE TABLE `laudo`(
  `IDLAUDO`  int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `LAUDO` varchar(200) NOT NULL
);

CREATE TABLE `atestado`(
  `IDATESTADO`  int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `ATESTADO` varchar(200) NOT NULL
);

CREATE TABLE `declaracao`(
  `IDDECLARACAO`  int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `UUIDCLINICA` varchar (100) DEFAULT NULL,
  `DECLARACAO` varchar(200) NOT NULL
);

CREATE TABLE `encaminhamento`(
  `IDENCAMINHAMENTO`  int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
   `IDCONSULTA` int NOT NULL,
  `UUIDCLINICA` varchar (100) DEFAULT NULL,
  `ENCAMINHAMENTO` varchar(200) NOT NULL
);








