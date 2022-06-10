import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './navbar.css';
import Logo from '../../assets/logo.png';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
      if(window.innerWidth <=960) {
          setButton(false);
      } else {
          setButton(true);
      }
  };

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {/* FLICKER Rave <i className="fab fa-typo3"></i> */}
                <img src={Logo} alt="logo" width="90" height="90" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-links" onClick={closeMobileMenu}>
               Register
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Gallery
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                to="/leaderboard" 
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Leaderboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/halloffame" 
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Hall Of Fame
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/terms"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                T&C
              </Link>
            </li>
            
            {/* <li className="nav-item">
              <Link
                to="/register"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Register
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Register</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
