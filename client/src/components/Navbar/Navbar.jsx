import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <ul>
                    <li>
                        <Link to="/">Vault</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
