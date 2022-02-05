import React from 'react';
import AntiqueCarouselButton from '../../miniComponents/AntiqueCarouselButton/AntiqueCarouselButton';
import './AntiqueRecentlyAdded.css';
import LeftCarousel from '../../assets/LeftCarousel.png'
import RightCarousel from '../../assets/RightCarousel.png'
import RAItem1 from '../../assets/RAItem1.png';

const AntiqueRecentlyAdded = () => {
    return ( 
        <div className="antiqueRecentlyAdded container">
            <h1>Recently Added</h1>
            <div className='row'>
                <p>Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p> 

                <div className="antiqueRecentlyAdded__carouselButtons">
                    <AntiqueCarouselButton image={LeftCarousel} background/>
                    <AntiqueCarouselButton image={RightCarousel}/>
                </div>
            </div>

            <div className="antiqueRecentlyAdded__items">
                <div className="antiqueRecentlyAdded__item">
                    <img src={RAItem1} alt="" />

                    <h4>Yet bed any for travelling</h4>
                    <span className="year">1192</span>
                    <span> | </span>
                    <span className="category">Weapons</span>

                    <div className="antiqueRecentlyAdded__itemMain row">
                        <h3>$895.50</h3>

                        <button>
                            View Details
                        </button>
                    </div>

                    <div className="antiqueRecentlyAdded__itemFooter row">
                        <p>14 bids so far</p>
                        <p>Bidding Closes in 12 days</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AntiqueRecentlyAdded;