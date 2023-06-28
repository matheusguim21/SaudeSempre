import { Request, Response } from "express";
import { Paciente, PacienteInstance } from "../models/Paciente";
import { Endereco } from "../models/Endereco";
import { Model } from "sequelize";
import { PlanoSaude } from "../models/PlanoSaude";
import { format } from 'date-fns';

let pacientesEnderecoPlano: PacienteInstance[];

export const pacientes = async (req: Request, res: Response) => {
  try {
    const pacientes: PacienteInstance[] = await Paciente.findAll();
    pacientesEnderecoPlano = await Promise.all(
      pacientes.map(async (paciente) => {
        const pacienteInstance = paciente as PacienteInstance;

        const endereco = await Endereco.findOne({
          where: {
            idEndereco: pacienteInstance.Endereco_idEndereco,
          },
        });

        const planoSaude = await PlanoSaude.findOne({
          where: {
            idPlanoSaude: pacienteInstance.PlanoSaude_idPlanoSaude,
          },
        });

        if (endereco) {
          pacienteInstance.endereco = {
            ...endereco.dataValues,
          };
        }

        if (planoSaude) {
          pacienteInstance.planoSaude = {
            ...planoSaude.dataValues,
          };
        }

        const dataNascimentoFormatada = format(new Date(pacienteInstance.dataNascimento), 'dd/MM/yyyy');

        pacienteInstance.dataNascimentoFormatada = dataNascimentoFormatada;

        return pacienteInstance;
      })
    );

    res.render('pages/pacientes', {
      pacientes: pacientesEnderecoPlano,
    });
  } catch (error) {
    console.error(error);
    res.redirect('/error');
  }
};

export const adicionarPaciente = async (req: Request, res: Response) => {
  try {
    const { nome, cpf, enderecoId, telefone, dataNascimento, planoSaudeId } = req.body;

    const paciente = await Paciente.create({
      nome,
      cpf,
      Endereco_idEndereco: enderecoId,
      telefone,
      dataNascimento,
      PlanoSaude_idPlanoSaude: planoSaudeId,
    });

    res.redirect('/pacientes');
  } catch (error) {
    console.error(error);
    res.redirect('/error');
  }
};

export const alterarPaciente = async (req: Request, res: Response) => {
  try {
    const { pacienteId, nome, cpf, enderecoId, telefone, dataNascimento, planoSaudeId } = req.body;

    await Paciente.update(
      {
        nome,
        cpf,
        Endereco_idEndereco: enderecoId,
        telefone,
        dataNascimento,
        PlanoSaude_idPlanoSaude: planoSaudeId,
      },
      {
        where: {
          idPaciente: pacienteId,
        },
      }
    );

    res.redirect('/pacientes');
  } catch (error) {
    console.error(error);
    res.redirect('/error');
  }
};

export const excluirPaciente = async (req: Request, res: Response) => {
  try {
    const { pacienteId } = req.params;

    await Paciente.destroy({
      where: {
        idPaciente: pacienteId,
      },
    });

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
