import React from 'react'
import { Link } from 'react-router-dom'
import "firebase/compat/storage";

const Item = ({ item }) => {
    return (
        <div className="flex-col text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:flex-row ">
            <div className="w-full relative flex  bg-white px-6 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-8 sm:pt-8 md:p-4 lg:p-6">

                <div className="w-auto grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-2">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-4">
                        <img src={item.url} alt="img" className="object-center object-cover" />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-6">
                        <h4 className="mt-4 text-xl font-semibold uppercase leading-tight truncate">{item.name}</h4>
                        <div className="mt-1">
                            ${item.price},00
                            <span className="text-pink-600 text-sm"> /Arg</span>
                        </div>
                        <div className="mt-4 pb-4">
                            <span className="text-teal-600 text-md font-semibold">{item.details}</span>
                        </div>
                        <Link to={`/item/${item.id}`} for="my-modal-3" className="btn modal-button mt-2">Ver más</Link>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Item