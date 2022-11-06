import './Hero.css'
import React from 'react'

const Hero = () => {
  return (
    <div className='hero-main'>
        <div className='hero-text'>
            <h6 className='hero-subtitle'>welcom to YouGame</h6>
            <h4 className='hero-title'><em>Trouvez </em>vos jeux populaires ici</h4>
            <div className='main-button'>
                <a href="#"> Browse Now</a>
            </div>
        </div>
    </div>
  )
}

export default Hero