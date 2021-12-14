import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-dark mb-4'>
            <span className='navbar-brand'>
                Leonardo
            </span>
            <button className='btn btn-outline-danger'>
                <FontAwesomeIcon icon={ faSignOutAlt }/>
                <span>Salir</span>
            </button>
        </div>
    )
}
