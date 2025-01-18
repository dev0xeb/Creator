import React from 'react'
import ArcaneKnight from '../images/ArcaneKnight.jpg'
import ninja from '../images/cyberNinja.jpg'
import raider from '../images/desertRaider.jpg'
import futuristicSoldier from '../images/FurturisticSoldier.jpg'
import jungleTracker from '../images/jungleTracker.jpg'
import mutantMercnary from '../images/MutantMercnary.jpg'
import scanvenger from '../images/Scanvenger.jpg'
import shadowSamurai from '../images/shadowSmaurai.jpg'
import spaceRanger from '../images/spaceRanger.jpg'
import valkeylie from '../images/Valkeylie.jpg'
import '../index.css'

const Body = () => {
  return (
    <div>
      <div className='banner'>
        <div className='slider' style={{'--quantity': 10}}>
            <div className='item' style= {{'--position': 1}}><img src={ArcaneKnight} alt="" /></div>
            <div className='item' style= {{'--position': 2}}><img src={ninja} alt="" /></div>
            <div className='item' style= {{'--position': 3}}><img src={raider} alt="" /></div>
            <div className='item' style= {{'--position': 4}}><img src={futuristicSoldier} alt="" /></div>
            <div className='item' style= {{'--position': 5}}><img src={jungleTracker} alt="" /></div>
            <div className='item' style= {{'--position': 6}}><img src={mutantMercnary} alt="" /></div>
            <div className='item' style= {{'--position': 7}}><img src={scanvenger} alt="" /></div>
            <div className='item' style= {{'--position': 8}}><img src={shadowSamurai} alt="" /></div>
            <div className='item' style= {{'--position': 9}}><img src={spaceRanger} alt="" /></div>
            <div className='item' style= {{'--position': 10}}><img src={valkeylie} alt="" /></div>
        </div>
        <div className='content'>
          <h1 data-content= 'COMING SOON...'>COMING SOON...</h1>
          <div className='author'>
            <h2>CREATOR</h2>
            <p>You Can be what you Want</p>
          </div>
          <div className='model'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
