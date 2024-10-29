import React from 'react'
import "./Featured.scss"
import hoianImage from '../../Images/hoian.jpg';

export default function Featured() {
  return (

    <div className="featured__container">
      {/* 1 */}
      <div className="featured__items">
        <img src={hoianImage} alt="a1" className="featured__items--img" />
        <div className="featured__title">
          <h1 className="featured__location">Dubai</h1>
          <h3 className="featured__info">123 Properties</h3>
        </div>
      </div>
      {/* 2 */}
      <div className="featured__items">
        <img src={hoianImage} alt="a1" className="featured__items--img" />
        <div className="featured__title">
          <h1 className="featured__location">Dubai</h1>
          <h3 className="featured__info">123 Properties</h3>
        </div>
      </div>
      {/* 3 */}
      <div className="featured__items">
        <img src={hoianImage} alt="a1" className="featured__items--img" />
        <div className="featured__title">
          <h1 className="featured__location">Dubai</h1>
          <h3 className="featured__info">123 Properties</h3>
        </div>
      </div>
    </div>

  )
}
