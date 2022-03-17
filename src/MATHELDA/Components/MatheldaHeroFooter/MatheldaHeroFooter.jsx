import React from 'react';
import './MatheldaHeroFooter.css';
import Woman from '../../assets/woman.png'

const MatheldaHeroFooter = () => {
    return ( 
        <div className="matheldaHeroFooter">
            <div className="matheldaHeroFooter__left">
                {/* leftfooter */}
                {/* <img src={Woman} alt="" /> */}
                <p>eat</p>
                <p>breath.</p>
                <p>design.</p>
            </div>

            <div className="matheldaHeroFooter__right">
                right footer
            </div>
        </div>
     );
}
 
export default MatheldaHeroFooter;