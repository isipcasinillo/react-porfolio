import React from 'react'
import ParticlesBg from "particles-bg";
import './Hero.css'
function Hero() {

    return (
        <>
            <div className='hero__content' id="#ABOUT">
                <div className='hero__name'>Cyril Casinillo Isip</div>
                <div className='hero__title'>Full-stack web developer</div>
                <div className='hero__ctas'>
                    <button className='hero__button hero__port'>PORTFOLIO</button>
                    <button className='hero__button hero__git'>GITHUB</button>
                </div>

            </div>
            <div className='hero__bg'>
                <ParticlesBg type="cobweb" num={100} color="#FFFFFF" />

            </div>

        </>


    )
}

export default Hero;