import { Model, DataTypes } from "sequelize";

import {sequelize} from '../instances/mysql'

export interface MedicoInstance extends Model{
  id:number;
  nome:string;
  telefone:string;
  consultorioId:number;
  atendimentoId:number;

}

export const Medico = sequelize.define<MedicoInstance>("Medico",{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrementIdentity:true
  },
  nome:{
    type:DataTypes.STRING,
    allowNull:false
  },
  telefone:{
    type:DataTypes.CHAR(11),
    allowNull:false
  },
  consultorioId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Consultorio',
      key:'id'
      }
  },
  atendimentoId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Atendimento',
      key:'id'
      }
      

  }


})