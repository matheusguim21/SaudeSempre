import { Model, DataType, DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'
import { Endereco } from "./Endereco";
import { Consultorio } from "./Consultorio";

export interface AtendenteInstance extends Model{
  id:number;
  name:string;
  cpf:string;
  consultorio:number;
  usuario:string;
  senha:string
}

export const Atendente  = sequelize.define<AtendenteInstance>("Atendente", {
  id:{
    primaryKey:true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false
  },
  nome:{
    type: DataTypes.STRING,
    allowNull:false,

  },
  CPF:{
    type:DataTypes.CHAR(11),
    unique:true,
    allowNull:false,
  },
  consultorioId:{
  type:DataTypes.INTEGER,
  references:{
    model:'Endereco',
    key:'id'

  }
   
  }
  
  
})

Atendente.belongsTo(Endereco,{foreignKey:'consultorioId'})
Consultorio.hasMany(Atendente, { foreignKey: 'consultorioId' });
