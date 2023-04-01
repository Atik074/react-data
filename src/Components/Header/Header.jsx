import React from 'react';
import './Header.css'
import logo from "./image/photo-1568602471122-7832951cc4c5.png"

const Header = () => {
    return (
        <div className="d-flex justify-content-between align-items-center p-3 mb-4 border-bottom header">
             <h1 className='header-title'>Knowledge Cafe</h1>
        <div className='header-img'>
             <img className="rounded-circle"  src={logo} alt='' />
        </div>
     
           
        </div>
    );
};

export default Header;