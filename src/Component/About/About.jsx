import React from 'react';
import './About.css'
import Lottie from 'react-lottie-player';
import Weblottie2 from '../../LottieFile/45056.json'
import Weblottie3 from '../../LottieFile/88987.json'
import Typewriter from 'typewriter-effect';
import Logo2 from '../../Image/LogoMakr-3Black.png'
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import ClickSound from '../../Audio/ModrenSound.wav';
import Demo from '../../SubComponent/Drawer/Drawer'
import AnimatedPage from '../../SubComponent/AnimatedPage/AnimatedPage';

const About = () => {

    const [play] = useSound(ClickSound);


    return (

        <AnimatedPage>

            <div>

                <div className='About-Header-Div'>

                    <div className='Logodiv'>

                        <img className='Logo-2' id='About-Logo' src={Logo2} alt='img' />

                    </div>

                    <div className='About-Link-Div'>


                        <Link className='About-Btn-1' onMouseOver={play} to="/">Home </Link>
                        <Link className='About-Btn-1' onMouseOver={play} to="/About">About </Link>
                        <Link className='About-Btn-1' onMouseOver={play} to="/Service">Service </Link>
                        <Link className='About-Btn-1' onMouseOver={play} to="/Contact">Contact </Link>

                    </div>

                    <div className='Curvbox'></div>

                    <div className='About-Drawer-Div'>

                        <Demo />

                    </div>


                </div>

                <div className='Lottie-div-2'>



                    <div className='About-Des-Div'>

                        <p className='About-Heading'>ABOUT US</p>

                        <div className='Type-Div'>

                            <div className='Type-About'>

                                <p className='Hey-text'>Hey!</p>

                                <Typewriter
                                    onInit={(typewriter => {
                                        typewriter
                                            .pauseFor(1000)
                                            .typeString(`I am a Frontend Developer, i design <br> website for client-side, i develop new <br> user-facing features using HTML, CSS,<br> Javascript, and using Javascript <br> library React. Build reusable code <br>  and  library for future use, i do ensure <br> the  technical feasibility of UI/UX <br>  designs.`)
                                            .start();
                                    })}
                                />

                            </div>

                            <Lottie
                                loop
                                animationData={Weblottie3}
                                play
                                className='Lottie-tag-3'

                            />

                        </div>


                    </div>

                    <Lottie
                        loop
                        animationData={Weblottie2}
                        play
                        className='Lottie-tag-2'

                    />

                </div>


            </div>

        </AnimatedPage>
    )
}

export default About