import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => {
        setShow(!show);
    }


    return (
        <header>
            <div className='container'>
                <div className='flex-col-2'>
                    <NavLink to={'/'}>
                        <h4 className='logo'>Reactquery</h4>
                    </NavLink>

                    <nav className={show ? "mobile-menu" : "web-menu"}>
                        <ul className='web-menu'>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/fetchhold'}>Fetchuser</NavLink></li>
                            <li><NavLink to={'/fetching'}>Fetchpost</NavLink></li>
                        </ul>
                    </nav>

                    <div className="menubar" onClick={handleToggle}>
                        <i className="fa-solid fa-bars" ></i>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
