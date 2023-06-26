import { Model, DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'
import { Endereco, EnderecoInstance } from "./Endereco";

export interface ConsultorioInstance extends Model{
  consultorio: EnderecoInstance[];
  idConsultorio:number;
  nome:string;
  Endereco_idEndereco:number
  endereco?:EnderecoInstance
}

export const Consultorio  = sequelize.define<ConsultorioInstance>("Consultorio", 
{
  idConsultorio:{
    primaryKey:true,
    type: DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true
  },
  nome:{
    type: DataTypes.STRING,
    allowNull:false,

  },
  Endereco_idEndereco: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Endereco',
      key: 'id'
    }
  }
  
  
},
{tableName:'Consultorio', timestamps:false}

)
Consultorio.belongsTo(Endereco, { foreignKey: 'Endereco_idEndereco' });

