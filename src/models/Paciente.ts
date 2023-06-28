import { Model,DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'
import { Endereco } from "./Endereco";
import { EnderecoInstance } from "./Endereco";
import { PlanoSaudeInstance } from "./PlanoSaude";

export interface PacienteInstance extends Model {
  idPaciente: number;
  nome: string;
  cpf: string;
  Endereco_idEndereco: number | null;
  telefone: string;
  dataNascimento: Date;
  PlanoSaude_idPlanoSaude: string;
  Atendimento_idAtendimento: number | null;
  endereco?: EnderecoInstance;
  planoSaude?: PlanoSaudeInstance;
  dataNascimentoFormatada?: string;
}


export const Paciente = sequelize.define<PacienteInstance>('Paciente',{
  
  idPaciente  :{
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
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  Endereco_idEndereco:{
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
  PlanoSaude_idPlanoSaude:{
    type:DataTypes.STRING,
    allowNull:false,
    references:{
      model:'PlanoSaude',
      key:'id'
    }
  },
  Atendimento_idAtendimento:{
    type:DataTypes.INTEGER,
    references:{
      model:'Atendimento',
      key:'id'
    }
  }
   
},
{tableName:'Paciente', createdAt:false, updatedAt:false}
)
Paciente.belongsTo(Endereco,{foreignKey:'Endereco_idEndereco'})
Endereco.hasMany(Paciente,{foreignKey:'Endereco_idEndereco'})