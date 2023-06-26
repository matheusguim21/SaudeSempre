import { Model,DataTypes } from "sequelize";
import {sequelize} from '../instances/mysql'
import { Endereco } from "./Endereco";

export class PacienteInstance extends Model {
  public idPaciente!: number;
  public nome!: string;
  public cpf!: string;
  public Endereco_idEndereco!: number | null;
  public telefone!: string;
  public dataNascimento!: Date;
  public PlanoSaude_idPlanoSaude!: string;
  public Atendimento_idAtendimento!: number | null;

  // Adicione aqui os demais atributos ou métodos da classe, se necessário
}

export const Paciente = sequelize.define('Paciente',{
  
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