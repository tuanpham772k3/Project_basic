import React, { useState } from 'react'
import "./Header.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendar, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar, DateRange } from 'react-date-range';
import { format } from 'date-fns';

export default function Header() {
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);

    const [openOption, setOpenOption] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const handleOption = (name, action) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: action === "d" ? options[name] - 1 : options[name] + 1
            }
        })
    }

    return (
        <div className="header">
            <div className="header__container">

                {/* navigation */}
                <div className="nav__list">
                    {/* 1 */}
                    <div className="nav__item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    {/* 2 */}
                    <div className="nav__item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    {/* 3 */}
                    <div className="nav__item">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    {/* 4 */}
                    <div className="nav__item">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    {/* 5 */}
                    <div className="nav__item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>


                {/* content */}
                <div className="header__content">
                    <h1 className="header__title">A lifetime of discounts? It's Genius.</h1>
                    <p className="header__desc">Get rewarded for your travels - unlock instant savings of 10% or more with a free Lamabooking account</p>
                    <button className="header__btn">Sign in/ Register</button>
                </div>


                {/* search */}
                <div className="header__search">
                    {/* 1 */}
                    <div className="search__items">
                        <FontAwesomeIcon icon={faBed} />
                        <input type="text" className="search__items--input" placeholder='Where are you going?' />
                    </div>
                    {/* 2 */}
                    <div className="search__items">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span className="search__items--text" onClick={() => setOpenDate(!openDate)}>
                            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className='date__range'
                        />}
                    </div>
                    {/* 3 */}
                    <div className="search__items">
                        <FontAwesomeIcon icon={faPerson} />
                        <span className="search__items--text" onClick={() => setOpenOption(!openOption)}>
                            {`${options.adult} Adult - ${options.children} Children - ${options.room} Room`}
                        </span>
                        {openOption
                            &&
                            <div className="options">
                                {/* 1 */}
                                <div className="options__item">
                                    <p className='options__name'>Adult</p>
                                    <div className="options__counter">
                                        <button className='counter__btn'
                                            onClick={() => handleOption("adult", "d")}
                                            disabled={options.adult <= 1}
                                        >
                                            -
                                        </button>
                                        <p className="counter__number">{options.adult}</p>
                                        <button className='counter__btn' onClick={() => handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                {/* 2 */}
                                <div className="options__item">
                                    <p className='options__name'>Children</p>
                                    <div className="options__counter">
                                        <button className='counter__btn'
                                            onClick={() => handleOption("children", "d")}
                                            disabled={options.children < 1}
                                        >
                                            -
                                        </button>
                                        <p className="counter__number">{options.children}</p>
                                        <button className='counter__btn' onClick={() => handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                {/* 3 */}
                                <div className="options__item">
                                    <p className='options__name'>Room</p>
                                    <div className="options__counter">
                                        <button className='counter__btn'
                                            onClick={() => handleOption("room", "d")}
                                            disabled={options.room <= 1}
                                        >
                                            -
                                        </button>
                                        <p className="counter__number">{options.room}</p>
                                        <button className='counter__btn' onClick={() => handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    {/* 4 */}
                    <div className="search__items">
                        <button className="search__btn">Search</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
