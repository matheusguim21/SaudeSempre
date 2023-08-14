import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/postgres";

export interface ConsultaInstance extends Model {
  id: number;
  data: Date;
  tipo: string;
  status: string;
  planoSaudeId: number;
  pacienteId: number;
  pacienteplanoId: number;
  atendenteId: number;
  atendenteConsultorioId: number;
  medicoId: number;
  medicoConsultorioId: number;
}

export const Consulta = sequelize.define<ConsultaInstance>(
  "Consulta",
  {
    idConsulta: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrementIdentity: true,
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Paciente_idPaciente: {
      type: DataTypes.INTEGER,
      references: {
        model: "idPaciente",
        key: "id",
      },
    },

    Paciente_PlanoSaude_idPlanoSaude: {
      type: DataTypes.INTEGER,
      references: {
        model: "PacientePlano",
        key: "PlanoSaude_idPlanoSaude",
      },
    },
    Paciente_Endereco_idEndereco: {
      type: DataTypes.INTEGER,
      references: {
        model: "Paciente",
        key: "Endereco_idEndereco",
      },
    },

    Atendente_idAtendente: {
      type: DataTypes.INTEGER,
      references: {
        model: "Atendente",
        key: "idAtendente",
      },
    },
    Atendente_Consultorio_idConsultorio: {
      type: DataTypes.INTEGER,
      references: {
        model: "Atendente",
        key: "Consultorio_idConsultorio",
      },
    },
    Medico_idMedico: {
      type: DataTypes.INTEGER,
      references: {
        model: "Medico",
        key: "idMedico",
      },
    },
    Medico_Consultorio_idConsultorio: {
      type: DataTypes.INTEGER,
      references: {
        model: "Medico",
        key: "Consultorio_idConsultorio",
      },
    },
    PlanoSaude_idPlanoSaude: {
      type: DataTypes.INTEGER,
      references: {
        model: "PlanoSaude",
        key: "idPlanoSaude",
      },
    },
  },
  { tableName: "Consulta", timestamps: false }
);
