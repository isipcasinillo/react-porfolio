import React, { useState } from 'react'
import './Header.css'
import { BiMenu, BiX } from 'react-icons/bi'
function Header() {
    const [menuState, setMenuState] = useState(false)

    const toggleState = () => {
        setMenuState(v => !v)
    }
    return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <div className='header__logo'>
                    <a href="#HOME" onClick={() => setMenuState(false)}>ISIP</a>
                </div>
                <button className='header__menu' onClick={() => toggleState()}>
                    {
                        menuState ? <BiX size={24} /> : <BiMenu size={21} />
                    }
                </button>
                <ul className='header__ul'>
                    <li className='header__ul__li_1'>
                        <a href="#ABOUT">ABOUT</a></li>
                    <li>
                        <a href="#SKILLS">SKILLS</a></li>
                    <li>
                        <a href="#PROJECT">PROJECT</a></li>
                    <li>
                        <a href="#CONTACT">CONTACT</a></li>
                </ul>
            </div>
            <ul className={`header__ul_menu ${menuState ? '' : 'close'}`} onClick={() => toggleState()}>
                <li>
                    <a href="#ABOUT">ABOUT</a></li>
                <li>
                    <a href="#SKILLS">SKILLS</a></li>
                <li>
                    <a href="#PROJECT">PROJECT</a></li>
                <li>
                    <a href="#CONTACT">CONTACT</a></li>
            </ul>
        </div>
    )
}

export default Header