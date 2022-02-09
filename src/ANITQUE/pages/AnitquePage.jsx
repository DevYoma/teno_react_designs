import React from 'react';
import './anitque.css'
import AnitqueNav from '../components/AnitqueNavbar/AnitqueNav'
import AntiqueMain from '../components/AntiqueMain/AntiqueMain';
import AntiqueSearchBar from '../components/AntiqueSearchBar/AntiqueSearchBar';
import AntiqueRecentlyAdded from '../components/AntiqueRecentlyAdded/AntiqueRecentlyAdded';
import AntiqueTopCategory from '../components/AntiqueTopCategory/AntiqueTopCategory';

const AnitquePage = () => {
    return ( 
        <div className="anitque">
            <AnitqueNav />
            <AntiqueMain />
            <AntiqueSearchBar />
            <AntiqueRecentlyAdded />
            <AntiqueTopCategory />
        </div>
     );
}
 
export default AnitquePage;