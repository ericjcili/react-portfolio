import React from "react";
import './index.css';
import PicOfMe from '../../assets/PicOfMe.jpg';
import { Link, useLocation } from 'react-router-dom';


function Header() {
    const location= useLocation();
    const mystyle = {
        color: "black",
        backgroundColor: "white"
    };

    return (        
        <div className='header text-left'>
            <img src={PicOfMe} alt="picture of eric"  width="100" height="100"/>
            <h1 class='name'>Eric Cili</h1>
            <p class='info1'>Software Engineer, Web Applications</p>
            <div class='navigator'>
        <ul className='nav nav-tabs p-2'>
            <li className='nav-item'>
                <Link to='/' className={location.pathname === '/' ? 'nav-link active' : 'nav-link'} style={mystyle}>
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/projects' className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'} style={mystyle}>
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='/contact' className={location.pathname === '/contact' ? 'nav-link active' : 'nav-link'} style={mystyle}>
                    Contact
                </Link>
            </li>
            <li className='nav-item'> 
                <Link to='/resume' className={location.pathname === '/resume' ? 'nav-link active' : 'nav-link'} style={mystyle}>
                    Resume
                </Link>
            </li>
        </ul>
        </div>
        </div>
        
    );
}

export default Header;