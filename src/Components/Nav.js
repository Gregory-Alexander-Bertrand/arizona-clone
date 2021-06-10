import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div className="nav-bar">
            {/* <h4 className="logo">Arizona</h4> */}
            <ul className="links">
            <h4 className="logo">Arizona</h4>
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
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faShoppingBag} />
        </div>
    )
}

export default Nav
