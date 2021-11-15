import React from "react";
import './style.css';
import PicOfMe from '../../assets/PicOfMe.jpg';

function Header() {
    return (
        <div className='header text-left'>
            <h1>Eric Cili</h1>
            <img src={PicOfMe} alt="picture of eric"  width="100" height="100"/>
        </div>
    );
}

export default Header;