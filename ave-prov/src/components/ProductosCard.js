export function ProductosCard ({producto}){
    return(
        <div className="text-white bg-zinc-800 rounded-sm shadow-md shadow-black hover:cursor-pointer">
            <div className="px-4 py-4">
                {producto.image && <img src={producto.image.url}/>}
                <h3 className="text-xl">{producto.nombre}</h3>
                <h3 className="text-green-600">{"$" + producto.precio}</h3>
                <h3>{"Cantidad: " + producto.cantidad}</h3>
                <h3>{"Tienda "+producto.tienda}</h3>
                {"Descripcion: " + producto.descripcion}
            </div>
            
        </div>
    )
}