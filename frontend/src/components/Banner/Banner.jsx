import React from 'react'
import BannerLeft from '../../assets/BannerLeft.png'
import BannerRight from '../../assets/BannerRight.png'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner-container'>
       <img src={BannerLeft} alt="banner-left" className='banner-left-image' />
       <div className='banner-content-container'>
            <h1 className='banner-heading'>
                Hyper boost your <span style={{color: '#FFBD59'}}> Revenue Management, Marketing 
                    </span> and Commercial Functions with Business Ready AI
            </h1>
            <p className='banner-decription'>
                Powerful AI solutions that go beyond mere data sorting and exploration.
                Use our array of AI enabled solutions that understand your business and recommend the optimal way forward. 
            </p>
            <button className='banner-btn'>Get started</button>
       </div>
       <img src={BannerRight} alt="banner-right" className='banner-right-image' />
    </div>
  )
}

export default Banner 