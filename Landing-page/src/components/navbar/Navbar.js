import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'

import './NavbarStyles.css'

function Navbar() {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <img className='logo' src={Logo}></img>
                <span className='logo-text'>| WebWorkWave</span>
            </div>
            <ul className="nav-menu">
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='findjob' smooth={true} duration={500} ><li>Find Job</li></Link>
                <Link to='about' smooth={true} duration={500} ><li>About</li></Link>
                <button className='nav-btn' id='nav-btn'><Link to='/' smooth={true} duration={500} ><li>Login</li></Link></button>
                <button className='nav-btn' id='nav-btn'><Link to='/' smooth={true} duration={500} ><li>Register</li></Link></button>
            </ul>
            
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav" id='mobile-nav'>
                <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                <Link to='findjob' smooth={true} duration={500} ><li>Find Job</li></Link>
                <Link to='about' smooth={true} duration={500} ><li>About</li></Link>
                <Link to='/' smooth={true} duration={500} ><li>Log in</li></Link>
                <Link to='/' smooth={true} duration={500} ><li>Register</li></Link>
                </ul>

                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
