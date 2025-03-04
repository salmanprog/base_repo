import React from 'react'
import { useLocation } from 'react-router-dom';


function BreadCrum() {
    let location = useLocation();
    return (
        <div style={{fontFamily:'monospace'}} className='w-100 bg-white p-3'><span className='font-weight-light'>Admin</span> <span className='text-capitalize'>{location.pathname.replaceAll('/', ' > ')}</span></div>
    )
}

export default BreadCrum;