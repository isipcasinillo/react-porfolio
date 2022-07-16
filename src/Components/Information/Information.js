import React from 'react'
import { Element, Link } from 'react-scroll';
import '../Information/Information.css'
function Information() {
    return (
        <Element name="about">
            <div className='Information__wrapper'>
                <div className='Info__container'>
                    <div className='Info__title'>Information & Experience</div>
                    <div className='Info__box__container'>
                        <div className='Info__box__subcontainer'>
                            <div className='Info__box'>
                                <div className='Info__box__num'>
                                    221
                                </div>
                                <div className='Info__box__text'>
                                    Repository commits
                                </div>
                            </div>
                            <div className='Info__box prog'>
                                <div className='Info__box__num'>
                                    ~1
                                </div>
                                <div className='Info__box__text'>
                                    Years of programming and designing
                                </div>
                            </div>
                        </div>

                        <div className='Info__paragraph'>
                            Full Stack developer focused on front-end development. Recently earned my full-stack certification from Southern Methodist University. After the bootcamp, I have applied  my knowledge in Object oriented programming, Database patterns, Software architectural patterns, and API consumptions to build projects that help me solve everyday problems. Excited to add value by working with my future colleagues.
                        </div>
                        <button className='Info__contact'>
                            <Link to="contact" spy={true} smooth={true} duration={500}>Contact me</Link>
                          
                        </button>
                    </div>


                </div>

            </div>
        </Element>
    )
}

export default Information;