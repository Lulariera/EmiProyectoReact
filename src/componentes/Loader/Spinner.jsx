import React from 'react'
import loader from '../../assets/loader.gif'


const Spinner = () => {
  return (
    <>
    <div className="flex min-h-screen -mb-48">
        <img src={loader} alt="loader" className="m-auto mt-64" />
    </div>
</>
  )
}

export default Spinner