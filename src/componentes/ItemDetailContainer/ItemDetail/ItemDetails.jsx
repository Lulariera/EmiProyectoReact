import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import ItemCount from "../../ItemCount/ItemCount"
import { ArrowLeftIcon } from "@heroicons/react/solid"

const ItemDetail = ({ item }) => {

	   // Contexto del carrito
	   const { addItem } = useContext(CartContext)

	   // Use states que permiten hacer desaparecer el contador si se agregó el item al carrito
	   const [isInCart, setIsInCart] = useState(false)
   
	   // Agregar cantidad correcta de items al carrito
	   const addToCart = (quantity) => {
		   addItem(item, quantity)
		   setIsInCart(true)
	   }
	return (
		
		
		<div className="flex flex-row justify-between items-center mt-4">
				<div className="w-full relative flex items-center justify-items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
				<Link to={`/category/${item.category}`} type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8">
					<span className="sr-only">Close</span>
					<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
					  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				  </Link>
		
				  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
					<div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
					  <img src={item.image} alt={`${item.category}, ${item.name}`} className="object-center object-cover"/>
					</div>
					<div className="sm:col-span-8 lg:col-span-7">
					  <h2 className="text-2xl font-extrabold text-pink-500 sm:pr-12">{item.name}</h2>
		
					  <section aria-labelledby="information-heading" className="mt-2">
						<div className="flex items-center">
							<a href=" " className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500 mb-3">{item.info}</a>
						  </div>
						  <p className="text-2xl text-gray-900">${item.price}</p>
						<div className="mt-6">
						  <h4 className="">{item.details}</h4>
						</div>
						{isInCart ? (
								<Link
									to="/cart"
									className="btn bg-primary text-white  "
								>
									Terminar Compra
								</Link>
							) : (
								<ItemCount qty={item.qty} addToCart={addToCart} id={item.id} />
							)}
							<Link to={`/category/${item.category}`} className=" flex flex-row items-center mt-2">
                            <ArrowLeftIcon className="h-4 w-4 mr-1" />
                            ver {item.category}
                        </Link>
					  </section>
					</div>
				  </div>
				</div>
			  </div>
		
		
	)
}

export default ItemDetail