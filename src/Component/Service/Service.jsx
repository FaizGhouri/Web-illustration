import React from 'react'
import './service.css';
import Logo from '../../Image/LogoMakr-2.png';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router';
import Lottie from 'react-lottie-player';
import Lottie4 from '../../LottieFile/64110-web-development.json';
import Zoom from 'react-reveal/Zoom';
import { SiHtml5, SiReact, SiBootstrap } from 'react-icons/si';
import { IoLogoCss3, IoIosPaperPlane } from 'react-icons/io';
import { DiJavascript } from 'react-icons/di';
import { MdWeb } from 'react-icons/md';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import { GiRibbonMedal, GiPencilBrush } from 'react-icons/gi';
import { RiNewspaperFill } from 'react-icons/ri'
import AnimatedPage from '../../SubComponent/AnimatedPage/AnimatedPage';



const Service = () => {

    let navigate = useNavigate();

    const handleClick = () => {
        navigate(-1)
    }

    return (

        <AnimatedPage >

            <div className='Main-Service-Div'>

                <div className='Service-Header-Div'>

                    <BiArrowBack className='Back' onClick={handleClick} />

                    <Link to="/">

                        <img src={Logo} alt="img" className='Ser-logo' />
                    </Link>

                </div>

                <div className='Serivce-Middle-Div'>

                    <div className='Service-Text-Div'>

                        <Zoom left cascade>

                            <p className='Service-Text'>

                                OUR SERVICE

                            </p>

                            <ul>
                                <li>HTML <SiHtml5 className='List-font' /></li>
                                <li>CSS <IoLogoCss3 className='List-font' /></li>
                                <li>JavaScript <DiJavascript className='List-font' /></li>
                                <li>React <SiReact className='List-font' /></li>
                                <li>Responsive Web Developement<MdWeb className='List-font' /></li>
                                <li>Bootstrap <SiBootstrap className='List-font' /> </li>
                            </ul>


                        </Zoom>

                        <Fade left>


                            <Link className='Contact-Btn' to='/Contact'> CONTACT US</Link>
                        </Fade>
                    </div>

                    <div className='Service-Lottie-Div'>


                        <Fade right>



                            <Lottie
                                loop
                                animationData={Lottie4}
                                play
                                className='Lottie-tag-4'

                            />

                        </Fade>

                    </div>

                    <div className='Service-Footer-Div'>

                        <div className='Brand-Div'>

                            <RiNewspaperFill className='font' />

                            BRANDING

                        </div>

                        <div className='Quality-Div'>

                            <GiRibbonMedal className='font' />

                            QUALITY

                        </div>


                        <div className='Design-Div'>

                            <GiPencilBrush className='font' />

                            DESIGN

                        </div>

                        <div className='Creativity-Div'>

                            <IoIosPaperPlane className='font' />

                            CREATIVITY

                        </div>

                    </div>

                </div>


            </div>

        </AnimatedPage>
    )
}

export default Service