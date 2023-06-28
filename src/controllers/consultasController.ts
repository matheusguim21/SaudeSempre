import { Request,Response} from "express"
import { Consulta } from "../models/Consulta"



export const consulta = (req:Request, res:Response)=>{
  
  

  res.render('pages/home')

}



export const criarConsulta = (req:Request, res:Response)=>{

  Consulta.create({

    
  })


}

