import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Timeline from '../../components/TimeLine/Timeline'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar />
        <Banner />
        <Timeline />
    </div>
  )
}

export default Home