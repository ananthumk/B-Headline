import React, { useContext, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import Timeline from '../../components/TimeLine/Timeline'
import Cms from '../../components/CMS/Cms'
import { AppContext } from '../../context/AppContext'

const Home = () => {
  const { showCms , setCms} = useContext(AppContext)
  console.log('Cms', showCms)
  return (
    <div className='home-container'>
        {showCms && <Cms setCms={setCms} />}
        <Navbar setCms={setCms} />
        <Banner />
        <Timeline />
    </div>
  )
}

export default Home