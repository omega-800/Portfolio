import React from 'react';
import './Header.css';

function Header({title, photo}){
    return(
        <div className="header">
            <h1 className="header_title">{title}</h1>   
            <img alt="" className="header_image" src={photo}></img>     
        </div>
        
    )
}

export default Header;