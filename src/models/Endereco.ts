import { Model, DataTypes, IntegerDataType } from "sequelize";
import { sequelize } from "../instances/postgres";

export interface EnderecoInstance extends Model {
  idEndereco: number;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  cep: string;
}

export const Endereco = sequelize.define<EnderecoInstance>(
  "Endereco",

  {
    idEndereco: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cep: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "Endereco", createdAt: false, updatedAt: false }
);
