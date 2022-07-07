import React, { useRef, useState } from 'react';
import ParticlesBg from "particles-bg";
import emailjs from '@emailjs/browser';
import { BsLinkedin, BsCheckSquareFill, BsGithub } from 'react-icons/bs'
import '../../Components/Contact/Contact.css'
function Contact() {
    const [nameState, setNameState] = useState('')
    const [emailState, setEmailState] = useState('')
    const [messageState, setMessageState] = useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_KEY_KO, process.env.REACT_APP_TEMPLATE_ID_KO, form.current, process.env.REACT_APP_PUBLIC_KEY_KO)
            .then((result) => {
                setEmailState('')
                setMessageState('')
                setNameState('')
            }, (error) => {
                console.log(error.text);
            });
    };
    const HandleText = (event) => {
        const { value } = event.target
        setNameState(value)
    }
    const HandleEmail = (event) => {
        const { value } = event.target
        setEmailState(value)
    }
    const handleMessage = (event) => {
        const { value } = event.target
        setMessageState(value)
    }
    return (
        <>
            <div>

                <div className='Contact__Card'>
                    <div className='Contact__Title'>
                        Contact & Socials
                    </div>
                    <div className='Contact__Card__Wrapper'>
                        <form className='Contact__Form' ref={form} onSubmit={sendEmail}>
                            <div>
                                <label>Name</label>
                                <input type="text" name="user_name" value={nameState} onChange={HandleText} placeholder='Your Name' className='Contact__Field' required />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" name="user_email" value={emailState} onChange={HandleEmail} placeholder='Your Email' className='Contact__Field' required />
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea name="message" className='Contact__Text' value={messageState} onChange={handleMessage} placeholder='Your Message' required />
                            </div>

                            <input type="submit" value="SEND MESSAGE" className='Contact__Button' />
                        </form>
                        <div className='Contact__Icon__MainContainer'>
                            <div className='Contact__Icon__Container'>
                                <BsCheckSquareFill size={40} color='#3E4869' className='Contact__icon' />
                                <div>
                                    Isipcasinillo@gmail.com
                                </div>
                            </div>
                            <div className='Contact__Icon__Container'>
                                <BsLinkedin size={40} color='#3E4869' className='Contact__icon' />
                                <div>
                                    Linkedin.com/in/isipcasinillo
                                </div>
                            </div>
                            <div className='Contact__Icon__Container Contact__Icon__last'>
                                <BsGithub size={40} color='#3E4869' className='Contact__icon' />
                                <div>
                                    Github.com/isipcasinillo
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='Contact__bg'>
                <ParticlesBg type="cobweb" num={100} color="#FFFFFF" />
            </div>
        </>
    );
};

export default Contact;