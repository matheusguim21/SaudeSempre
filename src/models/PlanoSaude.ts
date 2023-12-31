import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/postgres";

export interface PlanoSaudeInstance extends Model {
  id: number;
  nome: string;
}

export const PlanoSaude = sequelize.define<PlanoSaudeInstance>(
  "PlanoSaude",
  {
    idPlanoSaude: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    nomePlano: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: "PlanoSaude", timestamps: false }
);
