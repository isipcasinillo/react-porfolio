import React from 'react'
import '../Projects/Projects.css'
import HelePs from '../../Assets/Screenshot/hele_ps.png'
import HelePsMid from '../../Assets/Screenshot/hele_ps_mid.png'
import UlapPs from '../../Assets/Screenshot/ulap_ps.png'
import UlapPsMid from '../../Assets/Screenshot/ulap_ps_mid.png'
function Projects() {
    return (
        <>
            <div className='Project__wrapper'>
                <div className='Project__title'>
                    <div className='Project__title__text'>
                        Projects & Design
                    </div>
                </div>
                <div className='Project__card__container'>
                    <div className='Project__card'>
                        <div className='Project__card__margin'>
                            <div className='Project__card__divider'>
                                <div className='Project__card__title'>
                                    HELE
                                </div>
                                <div className='Project__card__description'>
                                    My significant other and I were always asking one another 'when did we last fed our baby?' so, I created this application to help monitor the quantity and time between bottle feedings.
                                </div>
                                <button className='Project__card__button'>CASE STUDY</button>
                            </div>
                            <div className='Project__img__container'>
                                <img className='Project__card__img' src={HelePs} alt='hele screenshot' />
                                <img className='Project__card__img__md' src={HelePsMid} alt='hele screenshot mid' />
                            </div>

                        </div>
                    </div>
                    <div className='Project__card'>
                        <div className='Project__card__margin'>
                            <div className='Project__card__divider'>
                                <div className='Project__card__title'>
                                    ULAP
                                </div>
                                <div className='Project__card__description'>
                                    My first ever assignment during my coding bootcamp was a weather app. I refined my previous assignment to cache fresh data to lower server requests and used the react framework for a quicker UI experience.
                                </div>
                                <button className='Project__card__button'>CASE STUDY</button>
                            </div>
                            <div className='Project__img__container'>
                                <img className='Project__card__img' src={UlapPs} alt='ulap screenshot' />
                                <img className='Project__card__img__md' src={UlapPsMid} alt='ulap screenshot mid' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects