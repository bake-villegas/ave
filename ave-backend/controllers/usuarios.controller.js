import U from '../models/Usuarios.js'
//TODO: Agg uuid 
//importo el modelo de Usuarios

//Obtiene un usuario por id
export const getUsuario = async (req, res) => {
    
    try {
        const idUsuario = await U.findById(req.params.id)
    if (!idUsuario) return res.sendStatus(404)
    return res.json(idUsuario)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

//Obtiene todos los usuarios
export const getUsuarios = async (req,res) => {
    
    try {
        const Usuarios = await U.find()
        res.send(Usuarios)
    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

//Crea un nuevo usuario
export const postUsuario = async(req, res) => {
   
    
    try {
        const {correo, password, nombres, apellidos} = req.body

        const usuarioNuevo = new U({correo, password, nombres, apellidos})
    
        await usuarioNuevo.save()
        return res.json(usuarioNuevo)
    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const putUsuario = async (req,res) => {
   
    try {
        const usuarioActualizado = await U.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(usuarioActualizado)
        return res.send('Usuario Actualizado')
    
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

export const deleteUsuario = async (req,res) => {
    
    try {
            const usuarioEliminado = await U.findByIdAndDelete(req.params.id)
    if (!usuarioEliminado) return res.sendStatus(404)
    return res.sendStatus(204)

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}