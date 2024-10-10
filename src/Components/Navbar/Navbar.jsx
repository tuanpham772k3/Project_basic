import React from 'react'
import "./Navbar.scss"
export default function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar__container">
                    <h1 className="navbar__logo">BookingHotel</h1>
                    <div className="navbar__item">
                        <button className="navbar__btn">Register</button>
                        <button className="navbar__btn">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
