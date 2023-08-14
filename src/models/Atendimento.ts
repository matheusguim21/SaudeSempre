import { Model, DataTypes } from "sequelize";

import { sequelize } from "../instances/postgres";

export interface Atendimento extends Model {
  id: number;
  data: string;
  diagnostico: string;
  receita: string;
}

export const Atendimento = sequelize.define("Atendimento", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  data: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  diagnostico: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receita: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
