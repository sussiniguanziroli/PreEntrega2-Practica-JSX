import React, { useEffect, useState } from 'react'
import data from '../data/productos.json'

export const ItemListContainer = () => {

  let [productos, setProductos] = useState([]);

  const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve(data);  
      }, 1000);
      
    })
  }

  useEffect(() => {
    pedirProductos()
    .then((res) => {
      setProductos(res)
      console.log(productos);
    })
  }, [])

  // encierro cada nombre de productos en una etiqueta p,
  // de esta manera contruyo todo el html

  return (
   <div className='item-list-container'>
    <h1>Productos</h1>
    <div className='items-container'>
      {
      productos.length > 0 ? 
      productos.map(producto => {
        return <div className='producto'>
          <img src={producto.image} alt={producto.image} />
          <h2>{producto.name}</h2>
          <p>${producto.price}</p>
          <p>{producto.description}</p>
        </div>
      })
      : <p>No hay productos</p>
    }
    </div>
    
   </div>
  )
}
