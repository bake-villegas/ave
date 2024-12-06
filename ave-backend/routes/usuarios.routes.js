import { Router } from "express";
import { postUsuario, deleteUsuario, getUsuario, getUsuarios, putUsuario } 
from '../controllers/usuarios.controller.js'

const router = Router()

router.get('/usuario/:id', getUsuario)

router.get('/usuarios', getUsuarios)

router.post('/usuario', postUsuario)

router.put('/usuario', putUsuario)

router.delete('/usuario', deleteUsuario)

export default router