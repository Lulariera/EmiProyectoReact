import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase/firebaseConfig'
import Spinner from '../../Loader/Spinner'
import Item from './Item/Item'

const ItemList = () => {
   // Use params
   const {categoryId} = useParams()

   // Use states para mostrar items y spinner cuando se deba
   const [items, setItems] = useState([])
   const [spinner, setSpinner] = useState(false)

   // Obtener la información de los items
   useEffect(() => {
       const getItems = async () => {
           setSpinner(true)
           const myItems = categoryId
               ? query(collection(db, "products"), where("category", "==", categoryId))
               : collection(db, "products")
           const querySnapshot = await getDocs(myItems)
           setItems(
               querySnapshot.docs.map((item) => {
                   return { ...item.data(), id: item.id }
               })
           )
           setSpinner(false)
       }
       getItems()
   }, [categoryId])
  return (

    <>
            <div className="container mx-auto flex flex-wrap gap-4 justify-center">
                {spinner
                    ? <Spinner />
                    : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 max-w-full lg:max-w-7xl m-auto">
                            {items.map((item) => (
                                <Item key={item.id} item={item} category={categoryId}></Item>
                            ))}
                        </div>
                    )
                }
            </div>

</>
  )
}

export default ItemList