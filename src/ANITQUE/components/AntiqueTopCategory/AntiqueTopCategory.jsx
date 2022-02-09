import React from 'react';
import AntiqueCarouselButton from '../../miniComponents/AntiqueCarouselButton/AntiqueCarouselButton';
import './AntiqueTopCategory.css';
import LeftCarousel from '../../assets/LeftCarousel.png'
import RightCarousel from '../../assets/RightCarousel.png'

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

            <div className="antiqueTopCategory__grid">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </div>
        </div>
     );
}
 
export default AntiqueTopCategory;