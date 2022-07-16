import React, { useState } from 'react'
import './Header.css'
import { BiMenu, BiX } from 'react-icons/bi'
import { Link } from 'react-scroll'
function Header() {
    const [menuState, setMenuState] = useState(false)

    const toggleState = () => {
        setMenuState(v => !v)
    }
    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <div className='header__logo'>
                <Link to="about" offset={-2000}spy={true} smooth={true} duration={500}onClick={() => setMenuState(false)}>ISIP</Link>
                    
                </div>
                <button className='header__menu' onClick={() => toggleState()}>
                    {
                        menuState ? <BiX size={24} /> : <BiMenu size={21} />
                    }
                </button>
                <ul className='header__ul'>
                    <li className='header__ul__li_1'>
                        <Link to="about" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
                    <li>
                    <Link to="skills" spy={true} smooth={true} duration={500}>SKILLS</Link></li>
                    <li>
                    <Link to="project" spy={true} smooth={true} offset={-30}duration={500}>PROJECTS</Link></li>
                    <li>
                    <Link to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
            </div>
            <ul className={`header__ul_menu ${menuState ? '' : 'close'}`} onClick={() => toggleState()}>
                <li>
                <Link to="about" spy={true} smooth={true} duration={500}>ABOUT</Link></li>
                <li>
                <Link to="skills" spy={true} smooth={true} duration={500}>SKILLS</Link></li>
                <li>
                <Link to="project" spy={true} smooth={true} offset={-30}duration={500}>PROJECTS</Link></li>
                <li>
                <Link to="contact" spy={true} smooth={true} duration={500}>CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default Header