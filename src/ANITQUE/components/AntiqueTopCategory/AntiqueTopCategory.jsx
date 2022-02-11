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

            
        </div>
     );
}
 
export default AntiqueTopCategory;