import { useState, createContext, useContext, useEffect} from "react"
import { getProductosReq, createProductoReq } from "../api/productos"

const postContext = createContext()

export const useProductos = () => {
   const context = useContext(postContext)
   return context
}

export const PostProvider = ({children}) => {
    const [productos, setProductos] = useState([])

    const getProductos = async () => {
       const res = await getProductosReq()
       setProductos(res.data)
    }

    const createProducto = async(producto) => {
        const res = await createProductoReq(producto)
        setProductos([...productos, res.data])
    }

    useEffect(() => {
        getProductos()
      }, [])
    

    return <postContext.Provider value={{
        productos,
        getProductos,
        createProducto
    }}>
        {children}
    </postContext.Provider>
}