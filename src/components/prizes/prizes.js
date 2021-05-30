import React from 'react';
import '../styles/prizes.css';
import Scooter from '../images/scooter.jpg'

const Prizes = () => {
  return(
    <div>
    <div class="container-fluid">
    <img src={Scooter} alt="yo"/>
  </div>
  <div id="des">
<h2>Gotrax Electric Scooter</h2>
<li>The adult electric powered scooter features a quiet 250W motor </li>
  <li>boasting top speed of 15.5 MPH and max load of 220 lbs. </li>
  <li>  Tackles steep 14° hills with ease, making it a perfect commuting scooter.</li>
  </div>
  </div>
  )
}

export default Prizes;