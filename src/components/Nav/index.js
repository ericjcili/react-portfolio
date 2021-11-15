import React from"react";
import { Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();

    return (
        <ul className='nav nav-tabs p-2'>
            <li className='nav-item'>
                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'}>
                    Contact
                </Link>
            </li>
            <li className='nav-item'> 
                <Link to='/resume' className={location.pathname === '/resume' ? 'nav-link active' : 'nav-link'}>
                    Resume
                </Link>
            </li>
        </ul>
    );
}

export default Nav;