import React from 'react';
import './AntiqueSubscribe.css';
import SubscribeImage from '../../assets/subscribeImage.png'

const AntiqueSubscribe = () => {
    return ( 
        <div className="antiqueSubscribe container">
                <h1>Subscribe our newsletter</h1>

                <div>
                    <p>Recieve latest news, update, and many other things</p>
                    <p>every week</p>
                </div>

                <div className="antiqueSubscribe__search">
                    <input type="text" placeholder='Enter your email address'/>
                    <div className="box"></div>
                </div>
           <img src={SubscribeImage} alt="Image" />
        </div>
     );
}
 
export default AntiqueSubscribe;