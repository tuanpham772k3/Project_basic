import React from 'react'
import './Footer.scss'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footer__container">
                {/* 1 */}
                <ul className="footer_items">
                    <li>Countries</li>
                    <li>Regions</li>
                    <li>Cities</li>
                    <li>Districts</li>
                    <li>Airports</li>
                    <li>Hotels</li>
                </ul>
                {/* 2 */}
                <ul className="footer_items">
                    <li>Homes</li>
                    <li>Apartments</li>
                    <li>Resorts</li>
                    <li>Villas</li>
                    <li>Hostels</li>
                    <li>Guest</li>
                </ul>
                {/* 3 */}
                <ul className="footer_items">
                    <li>Unique places to stay</li>
                    <li>Reviews</li>
                    <li>Unpacked: Travel articles</li>
                    <li>Travel communities</li>
                    <li>Seasonal and holiday deals</li>
                </ul>
                {/* 4 */}
                <ul className="footer_items">
                    <li>Car rental</li>
                    <li>Flight Finder</li>
                    <li>Restaurant reservations</li>
                    <li>Travel Agents</li>
                </ul>
                {/* 5 */}
                <ul className="footer_items">
                    <li>Curtomer Service</li>
                    <li>Partner Help</li>
                    <li>Careers</li>
                    <li>Sustainability</li>
                    <li>Press center</li>
                    <li>Safety Resource Center</li>
                    <li>Investor relations</li>
                    <li>Terms & conditions</li>
                </ul>
            </div>
        </div>
    )
}
