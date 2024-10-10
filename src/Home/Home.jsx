import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import Featured from '../Components/Featured/Featured'
import "./Home.scss"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
      </div>
    </div>
  )
}
