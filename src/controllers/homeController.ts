import { Request,Response } from "express"
import {sequelize} from '../instances/mysql'



export const home = async (req: Request, res:Response)=>{
  try{
    await sequelize.authenticate();
    console.log('Conexão estabelecida na porta', process.env.MYSQL_PORT)

  }catch(error){
    console.log('Deu problema no código: erro:', error)
  }

  res.render('pages/home', {
    
  })
}