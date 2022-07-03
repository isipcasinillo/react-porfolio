import React from 'react'
import '../Education/Education.css'
function Education() {
    return (
        <>
            <div className='Education__wrapper'>
                <div className='Education__container'>
                    <div className='Education__certification '>
                        Education & Certification
                    </div>
                    <div className='container'>
                        <div className='dates'>
                            2021-2024
                        </div>
                        <div className='creds'>
                            <div className='Education__school'>
                                Unversity of Texas at Arlington
                            </div>
                            <div className='Education__type'>
                                Pursuing a Bachelor of Science in Software Engineer
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
                                Department of Education, P.A Harrisburg
                            </div>
                            <div className='Education__type'>
                                General Education Development
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Education