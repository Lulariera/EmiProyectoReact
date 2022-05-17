import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemsById } from '../../firebase/firebaseConfig'
import Spinner from '../Loader/Spinner'
import ItemDetails from './ItemDetail/ItemDetails'

const ItemDetailContainer = () => {
     // Use params
     const { itemId } = useParams()

     // Use states
     const [item, setItems] = useState([])
     const [spinner, setSpinner] = useState(false)
 
     // Obtener información del item
     useEffect(() => {
         setSpinner(true)
         getItemsById(itemId).then((data) => {
             setItems(data)
             setSpinner(false)
         })
     }, [itemId])
 
     // Renderizar detalles de item
     return (
         <>
             {/* Mientras carga toda la información del item, mostrar un spinner */}
             {spinner
                 ? <Spinner />
                 : (<ItemDetails key={item.id} item={item}></ItemDetails>)
             }
         </>
     )
 }

export default ItemDetailContainer