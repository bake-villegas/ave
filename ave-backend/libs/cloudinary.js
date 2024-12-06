import {v2 as cloudinary} from 'cloudinary';
cloudinary.config({
    cloud_name:"ave_images",
    api_key:"176814124216952",
    api_secret:"Geo_jFEfzdtL8EHmYcXADxeCr1g"
})

export const uploadImage = async filePath =>{
    return await cloudinary.uploader.upload(filePath, {
        folder: 'productos'
        }
        
    )
}

export const deleteImage = async id => {
    return await cloudinary.uploader.destroy(id)
}
