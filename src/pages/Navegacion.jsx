import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../imagenes/navegacion/logo.png"
export default function Navegacion() {

    const [val, setVal] = useState(false)
    function trasladar() {
        setVal((prev) => !prev)
    }

    return (
        <header className='wraper-header'>
            <div className='wrap'>
                <div className='logo-header'>
                    <a href="/">
                        <img src={logo} id='header-logo' alt="logo" />
                    </a>
                </div>
                <div className='middle'>
                    <button onClick={trasladar} className="boton-hamburguesa">
                        <div className='burg'>
                            <div className={val ? "linea1-hamb" : ""}></div>
                            <div className={val ? "linea2-hamb" : ""}></div>
                            <div className={val ? "linea3-hamb" : ""}></div>
                        </div>
                    </button>
                </div>
                <nav className={val ? "nav-tag active" : "nav-tag"}>
                    <ul>
                        <li>
                            <NavLink to="" className="">home</NavLink>
                        </li>
                        <li>
                            <NavLink to="About" className="">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="Services" className="">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="Projects" className="">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="Contact" className="">Contact</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
