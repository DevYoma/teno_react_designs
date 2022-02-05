import React from 'react';
import AntiqueOrangeButton from '../../miniComponents/AntiqueOrangeButton/AntiqueOrangeButton';
import './AnitqueNav.css';

const AnitqueNav = () => {
    return ( 
        <nav className="antique__nav container row">
                <p>Siboria<span>.</span></p>

                <ul className='antique__lists row'>
                    <li>Home</li>
                    <li>Collections</li>
                    <li>How We Collect</li>
                    <li>Sell An Antique</li>
                    <li>Blog</li>
                </ul>

                {/* <button className="antique__button">
                    Our Collections
                </button> */}
                <AntiqueOrangeButton name="Our Collections"/>
        </nav>
     );
}
 
export default AnitqueNav;