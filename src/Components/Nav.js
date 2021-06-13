import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div className="nav-bar">
            <div className="hamburger-icon">
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="arizona">
            <h4 className="logo">Arizona</h4>
            </div>
            <div className="nav-links">
            <ul className="links">
                <li>Drinks</li>
                <li>Sun Brew</li>
                <li>Mixes</li>
                <li>Snacks</li>
                <li>Merch</li>
                <li>Offers</li>
                <li>Explore</li>
                <li>International</li>
                <li>About Us</li>
            </ul>
            </div>
            <div className="checkout-icons">
            <FontAwesomeIcon icon={faUser} className="icon"/>
                <FontAwesomeIcon icon={faSearch} className="icon"/>
                <FontAwesomeIcon icon={faShoppingBag} className="icon"/>
            </div>
        </div>
    )
}

export default Nav
