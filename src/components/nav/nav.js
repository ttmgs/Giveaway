import React from 'react';
import '../styles/nav.css';
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

	const location = useLocation();

	
	function mobileMenu() {
		document.querySelector(".hamburger").classList.toggle("active");
		document.querySelector(".nav-menu").classList.toggle("active");
	}

return(
	<div class="container-fluid">
<header class="header">
        <nav class="navbar">
            <a href="/" class="nav-logo">WINDSOR GIVEAWAYS</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-link">
										<Link
            to="/"
            className={
              location.pathname === "/"
                ? "nav-link active"
                : "nav-link"
            }
          >
											HOME</Link></a>
                </li>
               
                <li class="nav-item">
                    <a href="/prizes" class="nav-link">
											
										<Link
            to="/prizes"
            className={
              location.pathname === "/prizes"
                ? "nav-link active"
                : "nav-link"
            }
          >
											PRIZES</Link></a>
                </li>


                <li class="nav-item">
                    <a href="/contact" class="nav-link">
										<Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "nav-link active"
                : "nav-link"
            }
          >
											
											CONTACT</Link></a>
                </li>
            </ul>
            <div class="hamburger" onClick={mobileMenu}>
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
</header>

	</div>

)
  
}

export default Nav;