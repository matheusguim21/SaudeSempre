import { Model, DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'
import { Endereco } from "./Endereco";

export interface ConsultorioInstance extends Model{
  id:number;
  name:string;
  endereco:{
    id:string;
    rua:string;
    numero:string;
    bairro:string;
    cidade:string;
    estado:string;
    cep:string
  }
}

export const Consultorio  = sequelize.define<ConsultorioInstance>("Consultorio", {
  id:{
    primaryKey:true,
    type: DataTypes.INTEGER,
    allowNull:false
  },
  nome:{
    type: DataTypes.STRING,
    allowNull:false,

  },
  enderecoId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Endereco',
      key: 'id'
    }
  }
  
  
})
Consultorio.belongsTo(Endereco, { foreignKey: 'enderecoId' });
