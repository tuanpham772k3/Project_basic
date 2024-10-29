import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Featured from '../Components/Featured/Featured'
import "./Home.scss"
import Property from '../Components/Property/Property'
import FeatProperty from '../Components/FeatProperty/featProperty'
import Subcribe from '../Components/Subcribe/Subcribe'
import Footer from '../Components/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
        <h2 className="home_title">Browse by property type</h2>
        <Property />
        <h2 className="home_title">Home guests love</h2>
        <FeatProperty />
        <Subcribe />
        <Footer />
      </div>
    </div>
  )
}
