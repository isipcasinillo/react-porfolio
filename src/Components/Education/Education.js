import React from 'react'
import { Element } from 'react-scroll'
import '../Education/Education.css'
function Education() {
    return (
        <Element name="skills">
            <div className='Education__wrapper'>
                <div className='bg'>

                </div>
                <div className='Education__container'>
                    <div className='Education__certification '>
                        Education & Certification
                    </div>
                    <div className='container'>
                        <div className='dates'>
                            2023-2024
                        </div>
                        <div className='creds'>
                            <div className='Education__school'>
                                Western Governors University
                            </div>
                            <div className='Education__type'>
                                Pursuing a Bachelor of Science
                                <br />in Software Engineering
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='dates'>
                            2021
                        </div>
                        <div className='creds'>
                            <div className='Education__school'>
                                Southern Methodist University
                            </div>
                            <div className='Education__type'>
                                Full-stack web development certificate
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='dates'>
                            2016
                        </div>
                        <div className='creds'>
                            <div className='Education__school'>
                                Department of Education
                            </div>
                            <div className='Education__type'>
                                General Education Development
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Element>

    )
}

export default Education
