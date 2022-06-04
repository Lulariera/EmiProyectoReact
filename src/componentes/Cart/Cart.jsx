import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { ArrowLeftIcon, TrashIcon} from "@heroicons/react/solid" 

const Cart = () => {
    const {cartItems, removeItem, clearCart, cartLenght, getSubtotal, getTotal} = useContext(CartContext)

    return (
        <>
            {/* Si el carrito esta vacío, se muestra un mensaje de advertencia, si no, se muestra su contenido */}
            {cartLenght() === 0 ? (
            <div className="flex min-h-screen -mb-48 flex-col">
                    <div className="m-auto mt-64">
                        <p>Oops! Tu carrito está vacío. Por favor, agregá algún producto para poder continuar.</p>
                        <Link to='/' className=" flex flex-row items-center mt-3">
                            <ArrowLeftIcon className="h-4 w-4 mr-1" />
                            volver al inicio
                        </Link>
                    </div>
                </div>

            ) : (   


         // Contenido del carrito
         <div className="mx-6">
         <div className="flex flex-col justify-between w-full lg:max-w-7xl xl:m-auto">


             {/* Tabla de contenido */}
             <table className="inline-block overflow-x-auto whitespace-nowrap">
                 
                 {/* Nombre de columnas */}
                 <thead className="h-10 text-center">
                     <tr className="border-gray-200 border-b">
                         <th className="text-left pl-4">Producto</th>
                         <th className=" px-6 lg:px-16 xl:px-32">Precio</th>
                         <th className= " px-6 md:px-2 lg:px-8 xl:px-12">Cantidad</th>
                     </tr>
                 </thead>
                  {/* Items en el carrito */}
                  <tbody className="w-full text-center">
                                {cartItems.map((item) => (
                                    <tr key={item.id} className="border-gray-200 border-b">
                                        <th className="flex flex-row justify-left items-center pr-40 md:pr-0 ">
                                            <img className="p-4 h-65" src={item.url} alt={item.name} />
                                            <div className="flex flex-col text-left">
                                                <p >{item.name}</p>
                                            </div>
                                        </th>
                                        <th>{item.price}</th>
                                        <th>{item.quantity}</th>
                                        <th>{(getSubtotal(item.price, item.quantity))}</th>
                                        <th className="px-4 lg:pl-2 xl:pl-24">
                                            <TrashIcon onClick={() => removeItem(item.id)} className="w-6 h-6 border-transparent focus:border-transparent focus:ring-0 text-gray-400 hover:text-gray-600 cursor-pointer" />
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
             </table>
              {/* Detalles del carrito */}
              <div className="flex flex-col md:flex-row justify-between mt-6 mb-3 mx-4">

{/* Vaciar carrito */}
<button onClick={clearCart} className="lowercase flex flex-row items-center self-start mb-4">
    x vaciar carrito
</button>

{/* Resúmen de compra */}
<div className="flex flex-col self-start w-full md:w-2/5">
    <div className="flex flex-row justify-between ">
        <p>Cantidad de items:</p>
        <p>{cartLenght()}</p>
    </div>
    <div className="flex flex-row justify-between font-semibold ">
        <p>Total:</p>
        <p>${getTotal()},00</p>
    </div>
    <Link to='/checkout' className="btn modal-button mt-2">Checkout</Link>
    <Link to='/' className=" flex flex-row items-center mt-2">
        <ArrowLeftIcon className="h-4 w-4 mr-1" />
        seguir comprando
    </Link>
</div>
</div>
</div>
</div>
            )}
</>
    );
}

export default Cart