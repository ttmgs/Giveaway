import React from 'react';
import '../styles/nav.css';


const Nav = () => {


	// const hamburger = document.querySelector(".hamburger");
	// const navMenu = document.querySelector(".nav-menu");
	
	// hamburger.addEventListener("click", mobileMenu);
	
	function mobileMenu() {
		document.querySelector(".hamburger").classList.toggle("active");
		document.querySelector(".nav-menu").classList.toggle("active");
	}

return(
	<div class="container-fluid">
<header class="header">
        <nav class="navbar">
            <a href="#" class="nav-logo">WINDSOR GIVEAWAYS</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">HOME</a>
                </li>
               
                <li class="nav-item">
                    <a href="#" class="nav-link">PRIZES</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">CONTACT</a>
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