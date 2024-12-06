import {React} from 'react'
import { useProductos } from '../context/postContext'
import {Link} from 'react-router-dom'
import {ProductosCard} from '../components/ProductosCard'

function HomePage(){
  
const {productos} = useProductos()

return (
  <div className='text-black rounded-sm'>

    <Link to='/new' className='rounded-sm bg-slate-600 px-2'>Agregar nuevo producto</Link>

    <div className='grid grid-cols-3 gap-2'>
    { productos.map(producto => (
      <ProductosCard producto={producto} key={producto._id}/>
    ))}
    </div>
    
  </div>
)
}

export default HomePage