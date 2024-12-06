import mongoose from "mongoose";
const usuariosSchema = new mongoose.Schema({
    tipoUsuario:{
        type:String,
        required:true,
        trim:true
    },
    correo:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    nombres:{
        type: String,
        required:true,
        trim:true
    },
    apellidos:{
        type: String,
        required:true,
        trim:true
    },
    lista_favoritos:{
        id_producto: String
    },
    compras:[{
        id_compra: String,
        articulos: String}
    ]
    
})

export default mongoose.model('Usuarios', usuariosSchema)
