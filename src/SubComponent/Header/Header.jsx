import React from 'react';
import '../Header/Header.css';
import Logo from '../../Image/LogoMakr-2.png';
import useSound from 'use-sound';
import ClickSound from '../../Audio/ModrenSound.wav';
import Demo from '../Drawer/Drawer';
import { Link } from 'react-router-dom';

const Header = () => {

    const [play] = useSound(ClickSound);

    return (

        <div>
            <div className='Main-Header-Div' >



                <div className='Header-Div' data-midnight="blue">

                    <img src={Logo} alt='img' className='Logo' />



                    <nav className='Header-Btn-Div'>
                        <Link className='Header-Btn-1' onMouseOver={play} to="/">Home </Link>
                        <Link className='Header-Btn-2' onMouseOver={play} to="/About">About </Link>
                        <Link className='Header-Btn-3' onMouseOver={play} to="/Service">Service </Link>
                        <Link className='Header-Btn-4' onMouseOver={play} to="/Contact">Contact </Link>
                    </nav>




                </div>
            </div>

            <div className='Drawer-Div'>

                <Demo />

            </div>



        </div>
    )
}

export default Header
