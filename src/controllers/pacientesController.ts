import { Request, Response } from "express"




const paciente =[{
  id:2023,
  name:'Matheus',
  cpf:'18149386726',
  dataNascimento:'15/03/2000',
  telefone:'21992110290',
  planoDeSaude:'Assim',
  endereco: 'Rua Almeida Oliveira, 130',
  idAtendimento: 2

},
{
  id:2022,
  name:'Jorge',
  cpf:'17575434219',
  dataNascimento:'16/06/1997',
  telefone:'21965438756',
  planoDeSaude:'Assim',
  endereco: 'Rua Campo Grande, 123',
  idAtendimento: 1

}
]



export const pacientes = (req:Request, res:Response)=>{

  res.render('pages/pacientes',{
    paciente
  })
}
