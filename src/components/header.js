import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { MenuItem, StyledHeader } from "../styles/components"

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <img
        src="https://i.postimg.cc/6q3pg48v/Logo.png"
        alt="Logo Platzi Swag"
      />
    </Link>
    <nav>
      <ul>
        <MenuItem margin>
          <Link to="/">Productos</Link>
        </MenuItem>
        <MenuItem margin>
          <a href="http://www.platzi.com" target="_blank" rel="noopener noreferrer">
            Platzi
          </a>
        </MenuItem>
        <MenuItem>
          <Link to="/cart">
            <span>
              <img
                src="https://i.postimg.cc/L6wpMxLt/cart.png"
                alt="Cart Logo"
              />
            </span>
          </Link>
        </MenuItem>
      </ul>
    </nav>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
