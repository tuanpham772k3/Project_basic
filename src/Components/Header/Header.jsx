import React from 'react';
import "./Header.scss";

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#"><i className="fas fa-bed"></i> Stays</a></li>
                    <li className="nav-item"><a href="#"><i className="fas fa-plane"></i> Flights</a></li>
                    <li className="nav-item"><a href="#"><i className="fas fa-car"></i> Car rentals</a></li>
                    <li className="nav-item"><a href="#"><i className="fas fa-landmark"></i> Attractions</a></li>
                    <li className="nav-item"><a href="#"><i className="fas fa-taxi"></i> Airport taxis</a></li>
                </ul>
            </nav>
            <div className="header-content">
                <h1 className="header-title">A lifetime of discounts? It's Genius.</h1>
                <p className="header-subtitle">Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account.</p>
                <a href="#" className="btn-signin">Sign in / Register</a>
            </div>
        </header>
    );
}
