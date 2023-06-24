import { Model,DataTypes } from 'sequelize';
import {sequelize} from '../instances/mysql'


export interface PlanoSaudeInstance extends Model{
  id:number;
  nome:string;
}

export const PlanoSaude = sequelize.define<PlanoSaudeInstance>("PlanoSaude",{
  id:{
    primaryKey:true,
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false
  },
  nome:{
    type:DataTypes.STRING,
    allowNull:false
  }
})
