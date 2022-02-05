import React from 'react';
import './anitque.css'
import AnitqueNav from '../components/AnitqueNavbar/AnitqueNav'
import AntiqueMain from '../components/AntiqueMain/AntiqueMain';
import AntiqueSearchBar from '../components/AntiqueSearchBar/AntiqueSearchBar';
import AntiqueRecentlyAdded from '../components/AntiqueRecentlyAdded/AntiqueRecentlyAdded';

const AnitquePage = () => {
    return ( 
        <div className="anitque">
            <AnitqueNav />
            <AntiqueMain />
            <AntiqueSearchBar />
            <AntiqueRecentlyAdded />
        </div>
     );
}
 
export default AnitquePage;