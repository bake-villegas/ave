import React, { useEffect, useState } from 'react'
import {Formik, Form, Field} from 'formik'
import { useProductos } from '../context/postContext'
import { useNavigate } from 'react-router-dom'



function ProductosPage(){
  const {createProducto} = useProductos()
  const navigate = useNavigate()

  return (
    <div>
      <h1>Formulario para agregar nuevos productos</h1>
      <Formik
        initialValues={{
          nombre:'',
          cantidad:Number,
          tienda:'',
          descripcion:'',
          precio:Number,
          image:null
        }}
          onSubmit={async (values, actions)=>{
            await createProducto(values)
            navigate('/')
          }}
        >
        {({handleSubmit, setFieldValue})=> (
          <Form onSubmit={handleSubmit}>
          <Field name='nombre' placeholder="Nombre" className='px-3 py-2 focus:outline-none rounded'/>
          <Field name='cantidad' placeholder="Cantidad" className='px-3 py-2 focus:outline-none rounded'/>
          <Field name='tienda' placeholder="Tienda" className='px-3 py-2 focus:outline-none rounded'/>
          <Field name='descripcion' placeholder="Descripcion" className='px-3 py-2 focus:outline-none rounded'/>
          <Field name='precio' placeholder="Precio" className='px-3 py-2 focus:outline-none rounded'/>
          <Field name='image' type='file' className='px-3 py-2 focus:outline-none rounded' 
            onChange={(e) => setFieldValue('image', e.target.files[0])}/>

          <button type='submit' className='bg-green-300 hover:bg-green-600 text-black font-bold px-4 rounded'>Agregar</button>
        </Form>
        )}
      </Formik>

    </div>
  )
}

export default ProductosPage