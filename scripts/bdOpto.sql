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

CREATE TABLE `clinica` (
`IDCLINICA` int NOT NULL PRIMARY KEY AUTO_INCREMENT,
`UUIDCLINICA` varchar(100) DEFAULT NULL,
`NOMECLINICA` varchar(100) DEFAULT NULL,
`ENDERECO` varchar(100) DEFAULT NULL,
`BAIRRO` varchar (50) DEFAULT NULL,
`CIDADE` varchar(50) DEFAULT NULL,
`CEP` varchar(20) DEFAULT NULL,
`TELEFONE` varchar(20) DEFAULT NULL,
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

CREATE TABLE `anamnese`(
  `IDFICHACLINICA` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar (100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `DATA` date DEFAULT NULL,
  `PRURIDO` varchar(20) DEFAULT NULL,
  `FOTOFOBIA` varchar(20) DEFAULT NULL,
  `HIPEREMIA` varchar(20) DEFAULT NULL,
  `PTERIGIO` varchar(20) DEFAULT NULL,
  `EPIFERA` varchar(20) DEFAULT NULL,
  `TRAUMA` varchar(20) DEFAULT NULL,
  `VERMELHIDAO` varchar(20) DEFAULT NULL,
  `ARDENCIA` varchar(20) DEFAULT NULL,
  `DOROCULAR` varchar(20) DEFAULT NULL,
  `LACRIMEJAMENTO` varchar(20) DEFAULT NULL,
  `FORCAVISAO` varchar(20) DEFAULT NULL,
  `CANSACOVISUAL` varchar(20) DEFAULT NULL,
  `SENSIBILIDADELUZ` varchar(20) DEFAULT NULL,
  `GLAUCOMA` varchar(20) DEFAULT NULL,
  `CATARATA` varchar(20) DEFAULT NULL,
  `PTERIGIO_OD` varchar(20) DEFAULT NULL,
  `CERATOCONE` varchar(20) DEFAULT NULL,
  `ESTRABISMO` varchar(20) DEFAULT NULL,
  `CONJUNTIVITE` varchar(20) DEFAULT NULL,
  `ASMA` varchar(20) DEFAULT NULL,
  `COLESTEROL` varchar(20) DEFAULT NULL,
  `DIABETES` varchar(20) DEFAULT NULL,
  `HIPERTENSAO` varchar(20) DEFAULT NULL,
  `RENITE` varchar(20) DEFAULT NULL,
  `SINUSITE` varchar(20) DEFAULT NULL,
  `ALERGIAS` varchar(20) DEFAULT NULL,
  `REUMATISMO` varchar(20) DEFAULT NULL,
  `LOSARTANA` varchar(20) DEFAULT NULL,
  `CAPTOPRIL` varchar(20) DEFAULT NULL,
  `ATENOLOL` varchar(20) DEFAULT NULL,
  `NIFIDIPINO` varchar(20) DEFAULT NULL,
  `PROPANOLOL` varchar(20) DEFAULT NULL,
  `HIDROCLORATIAZIDA` varchar(20) DEFAULT NULL,
  `METIFORMINA` varchar(20) DEFAULT NULL,
  `GLIBENCAMIDA` varchar(20) DEFAULT NULL,
  `AAS` varchar(20) DEFAULT NULL,
  `SINVASTANTINA` varchar(20) DEFAULT NULL,
  `POLARAMINE` varchar(20) DEFAULT NULL,
  `OMEPRAZOL` varchar(20) DEFAULT NULL,
  `USAOCULOS` varchar(20) DEFAULT NULL,
  `DIFICULDADELONGE` varchar(20) DEFAULT NULL,
  `DIFICULDADEPERTO` varchar(20) DEFAULT NULL,
  `CEFALEIA` varchar(20) DEFAULT NULL,
  `DIABETES_AF` varchar(20) DEFAULT NULL,
  `ESTRABISMO_AF` varchar(20) DEFAULT NULL,
  `GLAUCOMA_AF` varchar(20) DEFAULT NULL,
  `PRESSAOALTA_AF` varchar(20) DEFAULT NULL,
  `CATARATA_AF` varchar(20) DEFAULT NULL,
  `USAOCULOS_AF` varchar(20) DEFAULT NULL,
  `OBSERVACAO` varchar(200) DEFAULT NULL

);

CREATE TABLE `prescricao_ultimo_exame`(
  `IDFICHACLINICA` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `IDCONSULTA` int NOT NULL,
  `UUIDCLINICA` varchar (100) DEFAULT NULL,
  `DATA` date DEFAULT NULL,
  `OD_ESFERICO` varchar(11) DEFAULT NULL,
  `OD_CILINDRICO` varchar(11) DEFAULT NULL,
  `OD_EIXO` varchar(11) DEFAULT NULL,
  `OD_ADICAO` varchar(11) DEFAULT NULL,
  `OD_DNP` varchar(11) DEFAULT NULL,
  `OD_ALT` varchar(11) DEFAULT NULL,
  `OE_ESFERICO` varchar(11) DEFAULT NULL,
  `OE_CILINDRICO` varchar(11) DEFAULT NULL,
  `OE_EIXO` varchar(11) DEFAULT NULL,
  `OE_ADICAO` varchar(11) DEFAULT NULL,
  `OE_DNP` varchar(11) DEFAULT NULL,
  `OE_ALT` varchar(11) DEFAULT NULL,
  `LENTE` varchar(20) DEFAULT NULL

);

CREATE TABLE `acuidade`(
  `IDFICHACLINICA` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `SC_OD_VP` varchar(11) DEFAULT NULL,
  `SC_OE_VP` varchar(11) DEFAULT NULL,
  `SC_AO_VP` varchar(11) DEFAULT NULL,
  `SC_OD_VP` varchar(11) DEFAULT NULL,
  `SC_OE_VP` varchar(11) DEFAULT NULL,
  `SC_AO_VP` varchar(11) DEFAULT NULL,
  `CC_OD_VP` varchar(11) DEFAULT NULL,
  `CC_OE_VP` varchar(11) DEFAULT NULL,
  `CC_AO_VP` varchar(11) DEFAULT NULL,
  `SC_OD_PH` varchar(11) DEFAULT NULL,
  `SC_OE_PH` varchar(11) DEFAULT NULL,
  `SC_AO_PH` varchar(11) DEFAULT NULL,
  `SC_OD_PH` varchar(11) DEFAULT NULL,
  `SC_OE_PH` varchar(11) DEFAULT NULL,
  `SC_AO_PH` varchar(11) DEFAULT NULL,
  `CC_OD_PH` varchar(11) DEFAULT NULL,
  `CC_OE_PH` varchar(11) DEFAULT NULL,
  `CC_AO_PH` varchar(11) DEFAULT NULL,
  `SC_OD_VL` varchar(11) DEFAULT NULL,
  `SC_OE_VL` varchar(11) DEFAULT NULL,
  `SC_AO_VL` varchar(11) DEFAULT NULL,
  `SC_OD_VL` varchar(11) DEFAULT NULL,
  `SC_OE_VL` varchar(11) DEFAULT NULL,
  `SC_AO_VL` varchar(11) DEFAULT NULL,
  `CC_OD_VL` varchar(11) DEFAULT NULL,
  `CC_OE_VL` varchar(11) DEFAULT NULL,
  `CC_AO_VL` varchar(11) DEFAULT NULL
  

);

CREATE TABLE `ceratometria`(
  `IDFICHACLINICA` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `OD` varchar(20) DEFAULT NULL,
  `OE` varchar(20) DEFAULT NULL,
  `MIRAS` varchar(20) DEFAULT NULL
);

CREATE TABLE `tonometria`(
  `IDTONOMETRIA` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `OD` varchar(20) DEFAULT NULL,
  `OE` varchar(20) DEFAULT NULL,
  `HORA` varchar(20) DEFAULT NULL
);

CREATE TABLE `reflexos_pupilares`(
  `IDREFLEXOS` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `FOTOMOTOR_OD` varchar(20) DEFAULT NULL,
  `CONSENSUAL_OD` varchar(20) DEFAULT NULL,
  `ACOMODATIVO_OD` varchar(20) DEFAULT NULL,
  `FOTOMOTOR_OE` varchar(20) DEFAULT NULL,
  `CONSENSUAL_OE` varchar(20) DEFAULT NULL,
  `ACOMODATIVO_OE` varchar(20) DEFAULT NULL,
  
);

CREATE TABLE `ppc`(
  `IDPPC` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `OR_SC` varchar(20) DEFAULT NULL,
  `LUZ_SC` varchar(20) DEFAULT NULL,
  `FILTRO_SC` varchar(20) DEFAULT NULL,
  `OR_CC` varchar(20) DEFAULT NULL,
  `LUZ_CC` varchar(20) DEFAULT NULL,
  `FILTRO_CC` varchar(20) DEFAULT NULL,
)

CREATE TABLE `biomicroscopia`(
  `IDBIOMICRO` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `IDCONSULTA` int NOT NULL,
  `CILIOS_OD` varchar(20) DEFAULT NULL,
  `SOMBRANCELHA_OD` varchar(20) DEFAULT NULL,
  `PALPEBRA_OD` varchar(20) DEFAULT NULL,
  `CONJUNTIVA_OD` varchar(20) DEFAULT NULL,
  `ESCLEROTICA_OD` varchar(20) DEFAULT NULL,
  `CORNEA_OD` varchar(20) DEFAULT NULL,
  `IRIS_OD` varchar(20) DEFAULT NULL,
  `PUPILA_OD` varchar(20) DEFAULT NULL,
  `CRISTALINO_OD` varchar(20) DEFAULT NULL,
  `CAMARA_OD` varchar(20) DEFAULT NULL,
  `OBSERVACAO_OD` varchar(100) DEFAULT NULL,
  `CILIOS_OE` varchar(20) DEFAULT NULL,
  `SOMBRANCELHA_OE` varchar(20) DEFAULT NULL,
  `PALPEBRA_OE` varchar(20) DEFAULT NULL,
  `CONJUNTIVA_OE` varchar(20) DEFAULT NULL,
  `ESCLEROTICA_OE` varchar(20) DEFAULT NULL,
  `CORNEA_OE` varchar(20) DEFAULT NULL,
  `IRIS_OE` varchar(20) DEFAULT NULL,
  `PUPILA_OE` varchar(20) DEFAULT NULL,
  `CRISTALINO_OE` varchar(20) DEFAULT NULL,
  `CAMARA_OE` varchar(20) DEFAULT NULL,
  `OBSERVACAO_OE` varchar(100) DEFAULT NULL
  
);

CREATE TABLE `oftalmoscopia`(
  `IDOFTALMOSCOPIA` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `IDCLINICA` int(11) NOT NULL,
  `UUIDCLINICA` varchar(100) DEFAULT NULL,
  `IDCONSULTA` int NOT NULL,
  `IDPACIENTE` int(11) NOT NULL,
  `REFLEXO` varchar(50) DEFAULT NULL,
  `PUPILA_OD` varchar(20) DEFAULT NULL,
  `ESCAVACAO_OD` varchar(20) DEFAULT NULL,
  `MACULA_OD` varchar(20) DEFAULT NULL,
  `FIXACAO_OD` varchar(20) DEFAULT NULL,
  `COR_OD` varchar(20) DEFAULT NULL,
  `RELACAOAV_OD` varchar(20) DEFAULT NULL,
  `OBSERVACAO_OD` varchar(20) DEFAULT NULL,
  `PUPILA_OE` varchar(20) DEFAULT NULL,
  `ESCAVACAO_OE` varchar(20) DEFAULT NULL,
  `MACULA_OE` varchar(20) DEFAULT NULL,
  `FIXACAO_OE` varchar(20) DEFAULT NULL,
  `COR_OE` varchar(20) DEFAULT NULL,
  `RELACAOAV_OE` varchar(20) DEFAULT NULL,
  `OBSERVACAO_OE` varchar(20) DEFAULT NULL,

);







