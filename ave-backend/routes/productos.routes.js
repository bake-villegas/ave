import { Router } from "express";

//Se importan las funciones del CRUD para los elementos de la base de datos
import { postProducto, deleteProducto, getProducto, getProductos, putProducto } 
from '../controllers/productos.controller.js'

const router = Router()

//Mediante estas rutas se reciben datos desde el frontend
router.get('/producto/:id', getProducto)

router.get('/productos', getProductos)

router.post('/producto', postProducto)

router.put('/producto/:id', putProducto)

router.delete('/producto/:id', deleteProducto)

export default router