import {Router} from 'express'
import * as HomeController from '../controllers/homeController'
import * as ConsultasCOntroller from '../controllers/consultasController'
import * as PacientesController from '../controllers/pacientesController'
import * as ConsultorioController from '../controllers/consultorioController'

const router = Router();


router.get('/home', HomeController.home)

router.get('/consulta',ConsultasCOntroller.consulta  )

router.get('/pacientes', PacientesController.pacientes )

router.get('/consultorio', ConsultorioController.consultorio )

router.delete('/consultorio/:consultorioId/:enderecoId', ConsultorioController.removerConsultorio);




router.post('/consultorio', ConsultorioController.salvarConsultorio);


export default router;