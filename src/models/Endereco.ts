import { Model, DataTypes, IntegerDataType } from "sequelize"
import {sequelize} from '../instances/mysql'


export interface EnderecoInstance extends Model{
  id:number,
  rua:string,
  numero:string,
  bairro:string,
  cidade:string,
  estado:string,
  cep:string
}

export const Endereco = sequelize.define<EnderecoInstance>("Endereco",

{
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true
    },
    rua:{
      type:DataTypes.STRING,
      allowNull:false
    },
    numero:{
      type:DataTypes.STRING,
      allowNull:false
    },
    bairro:{
      type:DataTypes.STRING,
      allowNull:false
    },
    cidade:{
      type:DataTypes.STRING,
      allowNull:false
    },
    estado:{
      type:DataTypes.STRING,
      allowNull:false
    },
    cep:{
      type:DataTypes.STRING,
      allowNull:false
      }
}
)