import React from 'react';
import './Contact.css';
// import Wave from 'react-wavify';
import { BiArrowBack } from 'react-icons/bi';
import Logo from '../../Image/LogoMakr-3Black.png'
import Logo2 from '../../Image/LogoMakr-2.png'
import { useNavigate } from 'react-router';
import Lottie from 'react-lottie-player';
import Contactlottie from '../../LottieFile/63257-contact-us.json';
import { GoLocation } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai'
import AnimatedPage from '../../SubComponent/AnimatedPage/AnimatedPage'
import { Link } from 'react-router-dom'


const Contact = () => {


    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    return (

        <AnimatedPage>

            <div className="Contact-Main-Div">

                <div className='Contact-Header'>

                    <BiArrowBack className='Contact-Back' onClick={handleClick} />


                    <Link to="/">

                        <img src={Logo} alt="img" className='Contact-Logo' />

                        <img src={Logo2} alt="img" className='Contact-Logo-2' />

                    </Link>

                </div>

                <div className='Contact-Middle-div'>

                    <div className='contact-lottie-div'>

                        <Lottie
                            loop
                            animationData={Contactlottie}
                            play
                            className='Lottie-tag-5'

                        />


                      


                        <div className='ACE-Div'>

                            <div className='Adress-Div'>



                                <GoLocation /> Address

                                <p className='Add-text'>Sun Shine Hotel 5th floor, <br /> 23th Street, Shahrah-e-faisal, <br /> Karachi</p>

                            </div>

                            <div className='Adress-Div'>

                                <BsTelephone /> Lets Talk

                                <p className='talk-text'>+923170270284</p>

                            </div>

                            <div className='Adress-Div'>

                                <AiOutlineMail /> Gerenal Support

                                <p className='Email-Text'>faizghouri5@gmail.com</p>

                            </div>

                        </div>


                    </div>

                    <div className='ACE-2'></div>

                    <div className='Contact-Msg-div'>

                        <div className='Email-box'>

                            <p className='send-text'>Send Us A Message</p>


                            <div className='Input-Div'>



                                <p className='tell-text'>NAME *</p>

                                <input className='Input-Name' type="text" placeholder='ENTER YOUR NAME' />

                                <p className='tell-text'>ENTER YOUR EMAIL *</p>

                                <input className='Input-Name' type="text" placeholder='Eg: example@gmail.com' />


                                <p className='tell-text'>MESSAGE *</p>

                                <textarea className='Input-Text' id='text-Area' placeholder='WRITE YOUR MESSAGE' cols="43" rows="3"></textarea>

                                <button className='Send-Btn'>SEND</button>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </AnimatedPage>

    )
}

export default Contact