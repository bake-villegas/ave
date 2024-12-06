import axios from 'axios'

export const getProductosReq = async () => await axios.get('http://localhost:4000/productos')

export const createProductoReq = async(producto) =>{
    const form = new FormData()
    
    for (let key in producto){
        form.append(key,producto[key])
    }

    return await axios.post('http://localhost:4000/producto', form, {
        headers: { 
            "Content-Type": "multipart/form-data"
        },
    });
};