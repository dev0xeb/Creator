import React from 'react';
import ArcaneKnight from '../images/ArcaneKnight.jpg';
import ninja from '../images/cyberNinja.jpg';
import raider from '../images/desertRaider.jpg';
import futuristicSoldier from '../images/FurturisticSoldier.jpg';
import jungleTracker from '../images/jungleTracker.jpg';
import mutantMercnary from '../images/MutantMercnary.jpg';
import scanvenger from '../images/Scanvenger.jpg';
import shadowSamurai from '../images/shadowSmaurai.jpg';
import spaceRanger from '../images/spaceRanger.jpg';
import valkeylie from '../images/Valkeylie.jpg';
import '../index.css';

const Body = () => {
  return (
    <div>
      <div className='banner'>
        {/* 3D Slider */}
        <div className='slider' style={{ '--quantity': 10 }}>
          {[
            ArcaneKnight,
            ninja,
            raider,
            futuristicSoldier,
            jungleTracker,
            mutantMercnary,
            scanvenger,
            shadowSamurai,
            spaceRanger,
            valkeylie,
          ].map((image, index) => (
            <div
              key={index}
              className='item'
              style={{ '--position': index + 1 }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className='content'>
          <h1 data-content='COMING SOON...'>COMING SOON...</h1>
          <div className='author'>
            <h2>CREATOR</h2>
            <p>You Can be what you Want</p>
          </div>
          <div className='model'></div>
        </div>
      </div>
    </div>
  );
};

export default Body;