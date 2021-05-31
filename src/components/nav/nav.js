import React from 'react';
import '../styles/nav.css';
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {

	const location = useLocation();

	
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
return(

<div class="topnav" id="myTopnav">
  <a href="/Giveaway" class="active">
  <Link
to="/Giveaway"
className={
  location.pathname === "/Giveaway"
    ? "nav-link active"
    : "nav-link"
}
>
    Home</Link></a>

    <a href="/enter">
  <Link
to="/enter"
className={
  location.pathname === "/enter"
    ? "nav-link active"
    : "nav-link"
}
>
    How to Enter</Link></a>


  <a href="/prizes">
  <Link
to="/prizes"
className={
  location.pathname === "/prizes"
    ? "nav-link active"
    : "nav-link"
}
>
    Prizes</Link></a>


  <a href="/contact">
  <Link
to="/contact"
className={
  location.pathname === "/contact"
    ? "nav-link active"
    : "nav-link"
}
>
    Contact</Link></a>


  <a href="javascript:void(0);" class="icon" onClick={myFunction}>
    <i class="fa fa-bars"></i>
  </a>
</div>

)
  
}

export default Nav;










			
{/* <Link
to="/prizes"
className={
  location.pathname === "/prizes"
    ? "nav-link active"
    : "nav-link"
}
> */}