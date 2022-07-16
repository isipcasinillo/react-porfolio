import React from 'react'
import ParticlesBg from "particles-bg";
import './Hero.css'
import { Element, Link } from 'react-scroll';
function Hero() {

    return (
        <Element name="about">
            <div className='hero__content ' name="test1" id="#ABOUT">
                <div className='hero__name'>Cyril Casinillo Isip</div>
                <div className='hero__title'>Full-stack web developer</div>
                <div className='hero__ctas'>
                    <Link className='hero__button hero__port' to="project" spy={true} smooth={true} offset={-30} duration={500}>PROJECT</Link>
                    <form action="https://github.com/isipcasinillo" target="_blank">
                        <button className='hero__button hero__git'>GITHUB</button>
                    </form>

                </div>

            </div>
            <div className='hero__bg'>
                <ParticlesBg type="cobweb" num={100} color="#FFFFFF" />

            </div>

        </Element>


    )
}

export default Hero;