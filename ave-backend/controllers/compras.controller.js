import U from '../models/Usuarios.js'

export const doCompra = async (req, res) => {
    
    try {
        
            const compra = await U.findByIdAndUpdate(req.params.id, req.body, {new: true})
            console.log(compra)
            return res.send('Compra realizada')

    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}