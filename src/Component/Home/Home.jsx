import React from 'react';
import '../Home/Home.css';
import Header from '../../SubComponent/Header/Header';
import Typewriter from 'typewriter-effect';
import Lottie from 'react-lottie-player';
import WebLottie from '../../LottieFile/48596-title.json';
import sample from '../../Video/video-1.mp4';
import AnimatedPage from '../../SubComponent/AnimatedPage/AnimatedPage';


const Home = () => {

    // const [isShown, setIsShown] = useState(false);

    // const pageTransition = {
    //     in: {
    //         opacity: 1,
    //         y: 0,
    //     },
    //     out: {
    //         opacity: 0,
    //         y: "-100%"
    //     }
    // }

    return (

        <AnimatedPage>

            <div className='Main-Home'>


                <Header />

                <video
                    autoPlay
                    loop
                    muted
                    className='video-Tag'
                >

                    <source src={sample} type='video/mp4' />

                </video>

                <div className='Type-lottie-div'>


                    <div className='Typewriter-div'>

                        <p>Hello,</p>

                        <Typewriter
                            onInit={(typewriter => {
                                typewriter
                                    .pauseFor(1000)
                                    .typeString("My name is Faiz Ghouri.")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString("I am Web Devepoler!")
                                    .start();
                            })}
                        />


                    </div>


                    <Lottie
                        loop
                        animationData={WebLottie}
                        play
                        className='Lottie-tag'
                    />


                </div>


                <button className='Get-Btn'>GET STARED</button>


            </div>

        </AnimatedPage>
    )
}

export default Home
