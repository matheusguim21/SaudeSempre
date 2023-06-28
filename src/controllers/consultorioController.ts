import { Request,Response } from "express"

import { Consultorio } from "../models/Consultorio"
import { Endereco, EnderecoInstance } from "../models/Endereco"
import { ConsultorioInstance} from "../models/Consultorio"

let consultoriosEndereco:ConsultorioInstance[]
export const consultorio = async (req: Request, res: Response) => {


  const consultorios:ConsultorioInstance[] = await Consultorio.findAll();
  consultoriosEndereco = await Promise.all(

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

  
  res.render('pages/consultorio', {
    consultorios: consultoriosEndereco
    
  })
}
export const salvarConsultorio = async (req: Request, res: Response) => {
  try {
    // Extrair os dados do formulário
    const { idEndereco,nome, cep, rua, numero, bairro, Cidade, Estado } = req.body;

    console.info(idEndereco)
    // Salvar o endereço
    const endereco = await Endereco.create({
      idEndereco,
      cep,
      rua,
      numero,
      bairro,
      cidade:Cidade,
      estado:Estado,
    });

    // Salvar o consultório associado ao endereço
    await Consultorio.create({
      nome,
      Endereco_idEndereco: endereco.idEndereco,
    });

    // Redirecionar para uma página de sucesso ou retornar uma resposta adequada

// Redirecionar para a mesma rota
res.render('pages/consultorio', {
  conclusao: true,
  consultorios: consultoriosEndereco,
});



  } catch (error) {
    // Lidar com erros de validação ou outros erros
    console.error(error);
    res.redirect("/error");
  }
};
export const removerConsultorio = async (req: Request, res: Response) => {
  try {
    
    const { consultorioId, enderecoId } = req.params;

    // Exclui o consultório do banco de dados
    await Consultorio.destroy({
      where: {
        idConsultorio: consultorioId,
      },
    });
    await Endereco.destroy({
      where:{
        idEndereco: enderecoId,
      }
    })

    res.sendStatus(200);
  } catch (error) {
    console.error('Erro ao excluir o consultório', error);
    res.sendStatus(500);
  }
};
