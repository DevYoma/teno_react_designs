import React from 'react';
import './MalikoPage.css';
import MalikoVerticalNav from '../Components/MalikoVerticalNav/MalikoVerticalNav'

const MalikoPage = () => {
    return ( 
        <div className="malikoPage">
            {/* <h3>This is the maliko page</h3> */}
            <MalikoVerticalNav />
        </div>
     );
}
 
export default MalikoPage;