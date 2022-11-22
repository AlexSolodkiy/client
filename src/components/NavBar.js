import React  from "react";
import {NavLink} from 'react-router-dom'
import './NavBar.css'

function NavBar (){
    return (
        <div className="nav">
            <ul>
                <li >
                    <NavLink  exact to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/blog'>Blog</NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to='/contacts'>Contacts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;