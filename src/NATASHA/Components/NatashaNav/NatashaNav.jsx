import React from 'react';
import './NatashaNav.css';
// import TwitterIcon from '@mui/icons-material/Twitter';
import { FaBeer } from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';
import { BsBehance } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


const NatashaNav = () => {
    return ( 
        <div className="natashaNav container">
            <div className="natashaNav__name">
                natasha.
            </div>

            <ul className="natashaNav__middle">
                <li>portfolio</li>
                <li>about me</li>
                <li>my blog</li>
                <li>reviews</li>
                <li>contact me</li>
            </ul>

            <div className='natashaNav__icons'>
                {/* <TwitterIcon /> */}
                <BsTwitter />
                <BsInstagram />
                <BsVimeo />
                <BsBehance />
                <BsLinkedin />
                
            </div>
        </div>
     );
}
 
export default NatashaNav;