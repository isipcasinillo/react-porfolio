import React from 'react'
import '../Technologies/Technologies.css'
import Javascript from '../../Assets/Images/javascript.svg'
import Reactsvg from '../../Assets/Images/react_icon.svg'
import Adobe from '../../Assets/Images/adobe_xd.svg'
import Mongodb from '../../Assets/Images/mongodb.svg'
import Nodejs from '../../Assets/Images/nodeicon.svg'
import Apolloserver from '../../Assets/Images/apolloserver.svg'
import htmlsvg from '../../Assets/Images/htmlicon.svg'
import csssvg from '../../Assets/Images/cssicon.svg'
import graphqlsvg from '../../Assets/Images/graphqlicon.svg'
function Technologies() {
    return (
        <>
            <div className='Technology_wrapper'>
                <div className='Technology__title'>
                    Technologies & Softwares
                </div>
                <div className='Technology__container'>
                    <div className='Technology__card one'>
                        <img className='Tech_svg' src={Javascript} alt='javascript icon svg' />
                        <div>
                            Javascript
                        </div>
                    </div>
                    <div className='Technology__card two'>
                        <img className='Tech_svg' src={Reactsvg} alt='React js icon svg' />
                        <div>
                            React js
                        </div>
                    </div>
                    <div className='Technology__card three'>
                        <img className='Tech_svg' src={Adobe} alt='Adobe XD icon svg' />
                        <div>
                            Adobe XD
                        </div>
                    </div>
                    <div className='Technology__card four'>
                        <img className='Tech_svg' src={Mongodb} alt='MongoDb icon svg' />
                        <div>
                            MongoDb
                        </div>
                    </div>
                    <div className='Technology__card five'>
                        <img className='Tech_svg' src={Nodejs} alt='Node js icon svg' />
                        <div>
                            Node js
                        </div>
                    </div>
                    <div className='Technology__card six'>
                        <img className='Tech_svg' src={Apolloserver} alt='Apollo Server icon svg' />
                        <div>
                            Apollo Server
                        </div>
                    </div>
                    <div className='Technology__card seven'>
                        <img className='Tech_svg' src={htmlsvg} alt='Html icon svg' />
                        <div>
                            Html
                        </div>
                    </div>
                    <div className='Technology__card eight'>
                        <img className='Tech_svg' src={csssvg} alt='Css icon svg' />
                        <div>
                            Css
                        </div>
                    </div>
                    <div className='Technology__card nine'>
                        <img className='Tech_svg' src={graphqlsvg} alt='Graphql icon svg' />
                        <div>
                            GraphQl
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Technologies