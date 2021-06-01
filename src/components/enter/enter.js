import React from "react";
import "../styles/enter.css";
import { Link, useLocation } from "react-router-dom";
import screenshot from '../images/names.png';

const Enter = () => {
  const location = useLocation();


  return (
    <div>
      <div id="wallpaper">
        <div class="container-fluid">
          <h2>HOW TO ENTER THE DRAW </h2>
          <div id="box">
            <h1>
              etransfer $30 to windsorgiveaway1@gmail.com with your name or you can pay with cash
            </h1>
            <h5>** each name ballot = $30,  $20 every other one</h5>
            <h3>DRAW DATE: this coming Saturday, June 5th @9PM</h3>
          </div>
<div id="how">
  <h1 id="how">How we pick a winner🤔</h1>
<img src={screenshot} alt='yo' style={{width: "420px", height: "250px"}}></img>
<h3>website: <a href="https://wheelofnames.com/">wheelofnames.com</a> </h3>
<h5 id="red">** draw will be live on worldstar windsor instagram @9pm</h5>
</div>
<div id="btnBox">
<div class="wrap">
<Link
                to="/prizes"
                className={
                  location.pathname === "/prizes"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                 
  <button class="button">
  View Prize
              </button>
              </Link>

</div>
</div>
        </div>
      </div>

    </div>
  );
};

export default Enter;
