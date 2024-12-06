import P from '../models/Productos.js'
import { uploadImage, deleteImage } from '../libs/cloudinary.js'
import fs from 'fs-extra'
//Se importa el modelo de Productos, 
//esto sirve para definir que elementos
//llegarán a la base de datos

//Obtiene un producto por id
export const getProducto = async (req, res) => {
    
    try {
        
        const idProducto = await P.findById(req.params.id)
        //Manda un mensaje de error al no encontar el id
        if (!idProducto) return res.sendStatus(404)
        return res.json(idProducto)
    

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

//Obtiene todos los productos
export const getProductos = async (req, res) => {
    try {

        const Productos = await P.find()
        res.send(Productos)

    } catch (error) {
        
        return res.status(500).json({message: error.message})
    }
}

//Crear un nuevo producto
export const postProducto = async (req, res) => {
    try {
            //Define los elementos a recibir y los guarda en req.body
            const {nombre, cantidad, tienda, descripcion, precio} = req.body
            let image;
            //Aquí va la carga de la imagen
            if (req.files?.image){
                const result = await uploadImage(req.files.image.tempFilePath)

                await fs.remove(req.files.image.tempFilePath)
                image = {
                    url: result.secure_url,
                    public_id: result.public_id
                }
            }
            //Una constante almacena los elementos en el modelo 
            const productoNuevo = new P({nombre, cantidad, tienda, descripcion, image, precio})
            await productoNuevo.save() //Se guarda el nuevo producto en la base de datos
            return res.json(productoNuevo) //Muestra en la respuesta el objeto
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

//Actualiza un producto
export const putProducto = async (req, res) =>{

    try {
        
        //Una constante almacena la consulta de la búsqueda de un id 
        const productoActualizado = await P.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(productoActualizado)
        return res.send('Producto Actualizado')

    } catch (error) {
    return res.status(500).json({message: error.message})
    }   

}

//Elimina un producto mediante el id
export const deleteProducto = async (req, res) =>{
    
    try {
        const productoEliminado = await P.findByIdAndDelete(req.params.id)
        if (!productoEliminado) return res.sendStatus(404)

        if(productoEliminado.image.public_id){
            await deleteImage(productoEliminado.image.public_id)
        }

        return res.sendStatus(204)
    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}