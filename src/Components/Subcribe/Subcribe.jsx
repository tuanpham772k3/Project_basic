import React from 'react'
import "./Subcribe.scss"

export default function Subcribe() {
    return (
        <div className='sub'>
            <div className="sub__container">
                <h1 className="sub__title">Save time, save money!</h1>
                <p className="sub__desc">Sign up and we'll send the best deals to you</p>

                <div className="sub__form">
                    <input type='email' className="sub__input" placeholder='Your email' />
                    <button className="sub__btn">Subcribe</button>
                </div>
            </div>

        </div>
    )
}
