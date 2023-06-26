import { Request,Response } from "express"
import { Consultorio } from "../models/Consultorio"
import { Endereco, EnderecoInstance } from "../models/Endereco"
import { ConsultorioInstance} from "../models/Consultorio"



export const consultorio = async (req: Request, res: Response) => {


  const consultorios:ConsultorioInstance[] = await Consultorio.findAll();

  let consultoriosEndereco = await Promise.all(
    consultorios.map(async (consultorio) => {
      const endereco = await Endereco.findOne({
        where: {
          idEndereco: consultorio.Endereco_idEndereco,
        },
      });
      if (endereco) {
        consultorio.endereco = {
          ...endereco.dataValues,
        };
      }
      return consultorio;
    })
  );
  console.info(consultoriosEndereco)
  res.render('pages/consultorio', {
    consultorios: consultoriosEndereco
    
  })
}