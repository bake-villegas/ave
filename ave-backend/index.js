import express from 'express'
import productosRoutes from './routes/productos.routes.js'
import usuariosRoutes from './routes/usuarios.routes.js'
import fileUpload from 'express-fileupload'
import { connectDB } from './db.js'
import dotenv from 'dotenv';

dotenv.config()

const app = express()
connectDB()
app.use(express.json())
app.use(productosRoutes)
app.use(usuariosRoutes)
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload' 
}))

app.set('port',process.env.PORT || 4000)

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})

app.listen(app.get('port'),()=>{
    console.log(`Usando Puerto ${app.get('port')}`);
});