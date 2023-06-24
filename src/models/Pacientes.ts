import { Model,DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'

export interface PacienteInstance extends Model{
  id:number;
  nome:string;
  cpf:string;
  enderecoId:number,
  telefone:string;
  dataNascimento:Date;
  planoSaude:string;
  atendimentoId:number
}

export const Paciente = sequelize.define('Paciente',{
  id:{
    primaryKey:true,
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false
  },
  nome:{
    type:DataTypes.STRING,
    allowNull:false
  },
  cpf:{
    type:DataTypes.CHAR(11),
    allowNull:false,
    unique:true
  },
  enderecoId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Endereco',
      key:'id'
    }
  },
  telefone:{
    type:DataTypes.CHAR(11),
    allowNull:false
  },
  dataNascimento:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  planoSaude:{
    type:DataTypes.STRING,
    allowNull:false,
    references:{
      model:'PlanoSaude',
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