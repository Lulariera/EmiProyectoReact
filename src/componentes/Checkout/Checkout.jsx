import { ArrowLeftIcon } from "@heroicons/react/solid"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { addOrder } from "../../firebase/firebaseConfig"

// Checkout
const Checkout = () => {

    // Context del carrito
    const { cartItems, cartLenght, clearCart, getTotal } = useContext(CartContext)

    // Use states que permiten obtener el id de la compra, mostrar un modal final y obtener los datos del cliente
    const [idCompra, setIdCompra] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [buyer, setBuyer] = useState({
        name: "",
        surname: "",
        telephone: "",
        email: "",
        emailConfirm: "",
    })

    // Expresiones para e-mail y teléfono
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
    const telephoneRegex = /^[+.]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{1,6}$/im

    // Fecha en la que se realizó la compra
    const orderDate = new Date().toLocaleDateString()

    // Obtener los datos del cliente
    const handleSubmitChange = (e) => {
        setBuyer({ ...buyer, [e.target.name]: e.target.value })
    }

    // Generación de la orden de compra
    function orderHandler() {
        const order = {
            buyer,
            item: cartItems,
            price: getTotal(),
            date: orderDate,
        }
        addOrder(order).then(data => {
            setIdCompra(data)
        })
    }

    // Render del checkout
    return (
        <>
            {/* Contenedor checkout */}
            {/* Detalle de facturación */}
            <div className="flex flex-col justify-center items-center w-full mt-6 lg:mt-0 mb-3">

                {/* Título */}
                <h1 className=" self-center mb-6">Checkout</h1>
                {/* Resúmen */}
                <div className="flex flex-col self-center w-full md:w-1/2 mr-6">
                    <h2>Resúmen de compra:</h2>
                    <div className="flex flex-col border bg-gray-200 p-4 mt-6">
                        <div className="flex flex-row justify-between ">
                            <p>Cantidad de items:</p>
                            <p>{cartLenght()}</p>
                        </div>
                        <div className="flex flex-row justify-between font-semibold mt-10 ">
                            <p>Total:</p>
                            <p>{(getTotal())}</p>
                        </div>
                    </div>
                    <Link to='/cart' className=" flex flex-row items-center mt-3 lowercase py-9">
                        <ArrowLeftIcon className="h-4 w-4 mr-1" />Volver al carrito </Link>
                </div>

                {/* Formulario */}
                <form className="space-y-6 space-x-6">
                    <h2 className="text-center py-8">Detalles de facturación</h2>
                    <input
                        className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                        id="name" type="text" name="name" required onChange={handleSubmitChange} placeholder="Nombre" />
                    <input
                        className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                        id="surname" type="text" name="surname" required onChange={handleSubmitChange} placeholder="Apellido" />
                    <input
                        className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                        id="telephone" type="tel" name="telephone" required onChange={handleSubmitChange} placeholder="Teléfono (xxxxxxxxx)" />
                    <input
                        className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                        id="email" type="email" name="email" required onChange={handleSubmitChange} placeholder="E-mail" />
                    <input
                        className="px-2 focus:outline-none focus:ring-white focus:border-gray-600 border-b border-gray-200 placeholder-gray-600 py-4 w-full "
                        id="emailConfirm" type="email" name="emailConfirm" required onChange={handleSubmitChange} placeholder="Confirmar e-mail" />
                </form>

                {/* Si se completan todos los inputs correctamente, se habilita el botón para proceder con el pago */}
                {buyer.name && buyer.surname && buyer.telephone && (buyer.email === buyer.emailConfirm) && telephoneRegex.test(buyer.telephone) && emailRegex.test(buyer.email, buyer.emailConfirm)
                    ? (
                        // Botón habilitado
                        <input
                            onClick={() => { orderHandler(); setShowModal(true) }}
                            className=" focus:outline-none text-white bg-gray-700 focus:ring-transparent text-center py-3 px-20 cursor-pointer mt-6"
                            type="submit" value="Proceder al pago" />
                    ) : (
                        // Botón deshabilitado
                        <input
                            className=" focus:outline-none text-white bg-gray-400 focus:ring-transparent text-center py-3 px-20 mt-6"
                            type="submit" value="Proceder al pago" disabled />
                    )
                }
            </div>

            {/* Contenedor modal final */}
            <div className={`${showModal ? "flex" : "hidden"} inset-0 fixed w-full h-full bg-pink-200`}>
                <div className="container mx-auto justify-center items-center px-4 md:px-10 py-20 place-self-center">
                    <div className="bg-white px-3 md:px-4 py-12 flex flex-col justify-center items-center">
                        <h2 className="text-center md:w-9/12 lg:w-7/12">¡Muchas gracias por tu compra {(buyer.name).toUpperCase()}!</h2>
                        <p className="mt-6 text-center md:w-9/12 lg:w-7/12 ">Te enviamos un mail a {(buyer.email).toLowerCase()} con tu orden de compra ID: {idCompra} para coordinar tu entrega.¡ Que lo disfrutes !</p>
                        <Link to="/" className="mt-6 flex justify-center">
                            <button onClick={clearCart} className=" focus:outline-none text-white bg-gray-700 focus:ring-transparent w-40 text-center py-3 cursor-pointer">
                                Volver al inicio
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout