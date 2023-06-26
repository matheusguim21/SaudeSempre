import { Request, Response } from "express"
import { Paciente, PacienteInstance } from "../models/Paciente"


export const paciente = async (req:Request, res:Response)=>{
  
  let pacientes = await Paciente.findAll()  
  

  res.render('pages/pacientes',{
    pacientes:pacientes
  })
}
