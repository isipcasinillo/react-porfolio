import React from 'react'
import '../Projects/Projects.css'
import HelePs from '../../Assets/Screenshot/hele_ps.png'
import HelePsMid from '../../Assets/Screenshot/hele_ps_mid.png'
import UlapPs from '../../Assets/Screenshot/ulap_ps.png'
import UlapPsMid from '../../Assets/Screenshot/ulap_ps_mid.png'
import SwipePsMid from '../../Assets/Screenshot/swipe_ps_mid.png'
import SwipePs from '../../Assets/Screenshot/swipe_ps.png'
import CfaPsMid from '../../Assets/Screenshot/Cfa_ps_mid.png'
import CfaPs from '../../Assets/Screenshot/Cfa_ps.png'
import { Element } from 'react-scroll'
function Projects() {

    const onHandleClick = (link) => {


        window.open(link, "_blank")

    }
    return (
        <Element name="proj">
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
                                <div className='Project__card__button__container'>

                                    <button className='Project__card__button' onClick={() => onHandleClick('https://hele-mern-app-v2.herokuapp.com/')}>VIEW LIVE</button>
                                    <button className='Project__card__button Pj_2' onClick={() => onHandleClick('https://github.com/isipcasinillo/hele')}>VIEW CODE</button>


                                </div>

                            </div >
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
                                    SWIPE REACT
                                </div>
                                <div className='Project__card__description'>
                                    A Kanban app for job applications. This helped me during my job application process for both web development and technician role.
                                </div>
                                <div className='Project__card__button__container'>
                                    <button className='Project__card__button' onClick={() => onHandleClick('https://swipe-react.herokuapp.com/')}>VIEW LIVE</button>
                                    <button className='Project__card__button Pj_2' onClick={() => onHandleClick('https://github.com/isipcasinillo/Swipe-react')}>VIEW CODE</button>
                                </div>
                            </div>
                            <div className='Project__img__container'>
                                <img className='Project__card__img' src={SwipePs} alt='Swipe screenshot' />
                                <img className='Project__card__img__md' src={SwipePsMid} alt='Swipe screenshot mid' />
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
                                <div className='Project__card__button__container'>
                                    <button className='Project__card__button' onClick={() => onHandleClick('https://weather-ulap.herokuapp.com/')}>VIEW LIVE</button>
                                    <button className='Project__card__button Pj_2' onClick={() => onHandleClick('https://github.com/isipcasinillo/ulap')}>VIEW CODE</button>
                                </div>
                            </div>
                            <div className='Project__img__container'>
                                <img className='Project__card__img' src={UlapPs} alt='ulap screenshot' />
                                <img className='Project__card__img__md' src={UlapPsMid} alt='ulap screenshot mid' />
                            </div>

                        </div>
                    </div>
                    <div className='Project__card'>
                        <div className='Project__card__margin'>
                            <div className='Project__card__divider'>
                                <div className='Project__card__title'>
                                    COLOR-FONT-APP
                                </div>
                                <div className='Project__card__description'>
                                    Help create color pallets for web developers. I use this to create template combinations for my projects.
                                </div>
                                <div className='Project__card__button__container'>
                                    <button className='Project__card__button' onClick={() => onHandleClick('https://color-font-app.herokuapp.com/')}>VIEW LIVE</button>
                                    <button className='Project__card__button Pj_2' onClick={() => onHandleClick('https://github.com/isipcasinillo/color-font-app')}>VIEW CODE</button>
                                </div>
                            </div>
                            <div className='Project__img__container'>
                                <img className='Project__card__img' src={CfaPs} alt='Color Font App screenshot' />
                                <img className='Project__card__img__md' src={CfaPsMid} alt='Color Font App screenshot mid' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Element>
    )
}

export default Projects