import {Router} from 'express'
import * as HomeController from '../controllers/homeController'
import * as ConsultasCOntroller from '../controllers/consultasController'
import * as PacientesController from '../controllers/pacientesController'
import * as ConsultorioController from '../controllers/consultorioController'

const router = Router();


router.get('/home', HomeController.home)

router.get('/consulta',ConsultasCOntroller.consulta  )

router.get('/pacientes', PacientesController.paciente )

router.get('/consultorio', ConsultorioController.consultorio )

export default router;