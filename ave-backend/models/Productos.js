import mongoose from "mongoose";
//Se crean plantillas para definir que elementos llegarán a la base de datos 
const productosSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true
    },
    cantidad:{
        type: Number,
        required: true,
        trim: true
    },
    tienda:{
        type: String,
        required: true,
        trim: true
    },
    descripcion:{
        type: String
    },
    image:{
        url: String,
        public_id: String
    },
    precio:{
        type: Number,
        required: true,
        trim: true
    }
})
export default mongoose.model('Productos', productosSchema)