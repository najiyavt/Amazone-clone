import React from 'react'
import './HomeScreen.css'
import HomeBanner from './HomeBanner/HomeBanner'
import HomeDetails from './HomeDetails/HomeDetails'
import Footer from '../../Components/Footer/Footer'

export const HomeScreen = () => {
  return (
    <div className='HomeScreen'>
        <HomeBanner />
        <HomeDetails />
        <Footer />
    </div>
  )
}
export default HomeScreen
