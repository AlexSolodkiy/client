import React from 'react';
import '../components/Header.css';
import NavBar from './NavBar';

function Header(){
    return(
        <div className="header">
            <div className="logo">Godictus</div>
            <NavBar/>
        </div>
    );
};


export default Header;


