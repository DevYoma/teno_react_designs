import React from 'react';
import './NatashaHero.css';
import NatashaHeroImage from '../../assets/Image.png';
import LatestWork1 from '../../assets/latest1.png';
import LatestWork2 from '../../assets/latest2.png';
import LatestWork3 from '../../assets/latest3.png';

const NatashaHero = () => {
    return ( 
        <div className="natashaHero container">
            <div className="natashaHero__leftSection">
                <img src={NatashaHeroImage} alt="Hero Image" />
            </div>

            <div className="natashaHero__rightSection">
                <div className="rightSection__absolute">
                    <p>missed advice my it no sister</p>

                    {/* <div className="rightSection__blueLine"></div> */}
                    <hr className="rightSection__blueLine" />
                </div>
                <h1 className="natashaHero__rightSectionHeading">
                    Why Me
                </h1>

                <div className="natashaHero__rightSectionParagraphDiv">
                    <p>Whether article spirits new her covered hastily sitting her. Money witty books nor son add. Chicken age had evening believe but proceed pretend mrs. </p>

                    <p>
                    At missed advice my it no sister. Miss told ham dull knew see she spot near can. Spirit her entire her called. Detract yet delight written farther his general.
                    </p>
                </div>

                <button>
                    schedule a call
                </button>

                <div className="natashaHero__latestWork">
                    <h2>Latest Work</h2>

                    <div className="natashaHero__latestWorkRow">
                        <div>
                            <img src={LatestWork1} alt="natashaImg1" />
                        </div>
                        <div>
                            <img src={LatestWork2} alt="natashaImg2" />
                        </div>
                        <div>
                            <img src={LatestWork3} alt="natashaImg3" />
                        </div>
                        <div>
                            <img src={LatestWork1} alt="natashaImg1" />
                        </div>
                        <div>
                            <img src={LatestWork2} alt="natashaImg2" />
                        </div>
                        <div>
                            <img src={LatestWork3} alt="natashaImg3" />
                        </div>
                       

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NatashaHero;