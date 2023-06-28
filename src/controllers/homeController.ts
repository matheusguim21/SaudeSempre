import { Request,Response } from "express"
import { Consulta, ConsultaInstance } from "../models/Consulta"
import { Endereco } from "../models/Endereco";




export const home = async (req: Request, res:Response)=>{
  
  const consultas = await Consulta.findAll();
  consultas.flat()
  console.log(consultas)
  
  

  res.render('pages/home', {
    consultas:consultas.flat()
  })
}



export const cadastrarConsulta = async (req: Request, res: Response) => {
  try {
    // Extrair os dados da requisição
    const { id, data, tipo, status, planoSaudeId, pacienteId, pacientePlanoId, atendenteId, atendenteConsultorioId, medicoId, medicoConsultorioId } = req.body;
    const { 
      nome: nome,
      idEndereco: idEndereco,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      estado: estado } = req.params;
    await Endereco.create({
      idEndereco,nome, cep, rua, numero, bairro, cidade, estado
    })

    // Criar uma nova instância de Consulta com os dados da requisição
    await Consulta.create({
      id, data, tipo, status, planoSaudeId, pacienteId, pacientePlanoId, atendenteId, atendenteConsultorioId, medicoId, medicoConsultorioId
    })

    // Responder com uma mensagem de sucesso
    res.status(200).json({ message: 'Consulta cadastrada com sucesso' });
  } catch (error) {
    // Tratar erros de cadastro da consulta
    console.error('Erro ao cadastrar a consulta:', error);
    res.status(500).json({ message: 'Erro ao cadastrar a consulta' });
  }
};
