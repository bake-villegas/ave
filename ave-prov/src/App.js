import React from 'react'
import HomePage from './pages/HomePage'
import ProductosPage from './pages/ProductosPage'
import {Routes,Route} from 'react-router-dom'
import { PostProvider } from './context/postContext'

function App(){
  return (
    <div className='bg-neutral-800 min-h-screen flex items-center'>
      <div className='px-10 bg-red-100 m-auto'>
          <div>
            <PostProvider>
              <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/new' element={<ProductosPage/>}/>
              </Routes>
            </PostProvider>
        </div>
      </div>
      
    </div>
    
  )
}

export default App