import React, { useContext } from 'react'
import BannerLeft from '../../assets/BannerLeft.png'
import BannerRight from '../../assets/BannerRight.png'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import './Banner.css'

const Banner = () => {

  const { headline, showCms } = useContext(AppContext)
  const headlines = headline.split(' ')
  console.log(headlines)
  const headlineLength = headlines.length
  const start = headlineLength / 3
  const end = headlineLength / 3 + start;
  const sp = headlines.slice(start, end)
  const f = headlines.slice(0, start)
  const e = headlines.slice(end, headlineLength)
  console.log(f, sp, e)
  console.log(headline)
  return (
    <div className='banner-container'>
      <img src={BannerLeft} alt="banner-left" className='banner-left-image' />
      <div className={`banner-content-container ${!showCms ? 'edit-index' : ''}`}>
        <h1 className='banner-heading'>
          {f.join(' ')} <span style={{ color: '#FFBD59' }}>{sp.join(' ')}</span> {e.join(' ')}
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