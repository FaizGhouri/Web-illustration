import React, {useState} from 'react';
import './Drawer.css';
import { FaHome } from 'react-icons/fa'
import { FcAbout } from 'react-icons/fc'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { CgPhone } from 'react-icons/cg'
import { Link } from 'react-router-dom';


const Demo = () => {

    const [open, setOpen] = useState(false);

    const ToggleMode = () => {

        setOpen(!open)

    }


    return (

        <div className='Main-Drawer'>
            <div className={open ? 'icon iconActive' : 'icon'} onClick={ToggleMode}>

                <div className='hamburger hamburgerIcon'></div>

            </div>



            <div className={open ? 'menu menuOpen' : 'menu menuClose'}>


                <ul className='List-Items'>

                    <li className='List-Link'><Link className='Menu-Link' to="/"><FaHome style={{ fontSize: '20px', position: 'absolute', right: '20px' }} />  HOME </Link></li>
                    <li className='List-Link'><Link className='Menu-Link' to="/About"><FcAbout style={{ fontSize: '20px', position: 'absolute', right: '20px' }} />ABOUT</Link></li>
                    <li className='List-Link'><Link className='Menu-Link' to="/Service"><MdOutlineMiscellaneousServices style={{ fontSize: '20px', position: 'absolute', right: '20px' }} />  SERIVCE</Link></li>
                    <li className='List-Link'><Link className='Menu-Link' to="/Contact"><CgPhone style={{ fontSize: '20px', position: 'absolute', right: '20px' }} /> CONTACT</Link></li>


                </ul>


            </div>

        </div>
    )
}

export default Demo