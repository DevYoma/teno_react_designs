import React from 'react';
import AntiqueCarouselButton from '../../miniComponents/AntiqueCarouselButton/AntiqueCarouselButton';
import './AntiqueTopCategory.css';
import LeftCarousel from '../../assets/LeftCarousel.png'
import RightCarousel from '../../assets/RightCarousel.png'
import Preview from '../../assets/preview.png';

const AntiqueTopCategory = () => {
    return ( 
        <div className="antiqueTopCategory container">
            <h1>Top Categories</h1>

            <div className='row'>
                <p>Party we years to order allow asked of. We so opinion friends me message as delight.</p>
                <div className='antiqueTopCategory__carouselButtons'>
                    <AntiqueCarouselButton image={LeftCarousel} background="white" />
                    <AntiqueCarouselButton image={RightCarousel}/>
                </div>
            </div>

            {/* <div className="antiqueTopCategory__grid">
                <div className='antiqueTopCategory__item one'>
                    <div className="number">122</div>
                    <p className="name">Weapons</p>
                    <p className="description">Worefall</p>
                </div>

                <div className='antiqueTopCategory__item two'>
                    <div className="number">122</div>
                    <p className="name">Weapons</p>
                    <p className="description">Worefall</p>
                </div>

                <div className='antiqueTopCategory__item three'>
                    <div className="number">122</div>
                    <p className="name">Weapons</p>
                    <p className="description">Worefall</p>
                </div>

                <div className='antiqueTopCategory__item four'>
                    <div className="number">122</div>
                    <p className="name">Weapons</p>
                    <p className="description">Worefall</p>
                </div>

                <div className='antiqueTopCategory__item five'>
                    <div className="number">122</div>
                    <p className="name">Weapons</p>
                    <p className="description">Worefall</p>
                </div>

                <div className='antiqueTopCategory__item six'>
                    <div className="number">122</div>
                    <p className="name">Weapons</p>
                    <p className="description">Worefall</p>
                </div>
            </div> */}
        </div>
     );
}
 
export default AntiqueTopCategory;