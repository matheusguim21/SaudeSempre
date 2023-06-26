import { Request,Response } from "express"

import { Consulta } from "../models/Consulta"



export const home = async (req: Request, res:Response)=>{
  
  const consultas = await Consulta.findAll();
  consultas.flat()
  console.log(consultas)
  
  

  res.render('pages/home', {
    consultas:consultas.flat()
  })
}