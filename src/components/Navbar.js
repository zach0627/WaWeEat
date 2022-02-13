import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'
import useWindowDimensions from '../hooks/UseWindowDimensions'


function Navbar() {
    const { height, width } = useWindowDimensions();
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick=
                    {closeMobileMenu}>
                        WaWeEat <i className="fas fa-utensils"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                主頁
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/food' className='nav-links' onClick={closeMobileMenu}>
                                美食
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                登入
                            </Link>
                        </li>
                    </ul>
                    {width >= 960 && <Button buttonStyle='btn--outline'>登入</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar


