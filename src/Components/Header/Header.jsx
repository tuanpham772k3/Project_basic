import React from 'react'

export default function Header() {
    return (
        <header class="header">
            <div class="header__logo">Logo</div>
            <nav class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item">Home</li>
                    <li class="header__nav-item">About</li>
                </ul>
            </nav>
            <h2 className='header__title'>Chỉ có 1 lần sống, hãy sống hết mình</h2>
            <p className="header__intro-text">cha yo</p>
            <button className="header__button">Sign in/ Register</button>
            <button className="navButton">Register</button>
        </header>

    )
}
