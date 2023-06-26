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
  idAtendente:{
    primaryKey:true,
    type: DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false
  },
  nome:{
    type: DataTypes.STRING,
    allowNull:false,

  },
  cpf:{
    type:DataTypes.CHAR(11),
    unique:true,
    allowNull:false,
  },
  Consultorio_idConsultorio:{
  type:DataTypes.INTEGER,
  references:{
    model:'Endereco',
    key:'id'

  }
   
  },
  usuario:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  senha:{
    type:DataTypes.STRING,
    allowNull:false
  }
},
{tableName:'Atendente', timestamps:false
});

  
  


Atendente.belongsTo(Endereco,{foreignKey:'consultorioId'})
Consultorio.hasMany(Atendente, { foreignKey: 'consultorioId' });
