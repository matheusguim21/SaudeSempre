import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

export interface ConsultaInstance extends Model{
  id:number;
  data:Date;
  tipo:string;
  status: string;
  planoSaudeId:number;
  pacienteId:number;
  pacienteplanoId:number;
  atendenteId:number;
  atendenteConsultorioId:number;
  medicoId:number;
  medicoConsultorioId:number;
  
}

export const Consulta = sequelize.define<ConsultaInstance>("Consulta",{

  id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrementIdentity:true
  },
  data:{
    type:DataTypes.DATE,
    allowNull:false
  },
  tipo:{
    type:DataTypes.STRING,
    allowNull:false
  },
  status:{
    type:DataTypes.STRING,
    allowNull:false
  },
  planoSaudeId:{
    type:DataTypes.INTEGER,
    references:{
      model:'PlanoSaude',
      key:'id'
    }
  },
  pacienteId:{
    type:DataTypes.INTEGER
  },
  pacienteplanoId:{
    type:DataTypes.INTEGER,
    references:{
      model:'PacientePlano',
      key:'id'
    }
  },
  atendenteId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Atendente',
      key:'id'
    }
  },
  atendenteConsultorioId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Consultorio',
      key:'id'
    }
  },
  medicoId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Medico',
      key:'id'
    }
  },
  medicoConsultorioId:{
    type:DataTypes.INTEGER,
    references:{
      model:'Consultorio',
      key:'id'
    }
  }
})
