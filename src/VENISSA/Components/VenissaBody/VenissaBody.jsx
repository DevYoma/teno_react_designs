import React from 'react';
import './VenissaBody.css'
import VenissaNav from '../VenissaNav/VenissaNav'
import VenissaHero from '../VenissaHero/VenissaHero';
import VenissaFooter from '../VenissaFooter/VenissaFooter';

const VenissaBody = () => {
    return ( 
        <div className="venissaBody">
            <VenissaNav />
            <VenissaHero />
            <VenissaFooter />
        </div>
     );
}
 
export default VenissaBody;